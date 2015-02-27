define(['lib/knockout', 'scripts/Book', 'scripts/Link', 'scripts/Skill', 'scripts/Utils'],
  function (ko, Book, Link, Skill, Utils) {
    'use strict';
    window.jiathis_config = {
      url: window.location.href,
      summary: '快来试试。',
      title: '我是 Level 1 Web Developer #Web技能树#',
      showClose: true,
      shortUrl: true,
      hideMore: false
    };

    var TalentTree = function (_e) {
      var e = _e || {};
      var self = this;

      var asciiOffset = 96;
      var hashDelimeter = '_';

      var numPortraits = 1;

      //Mega skill list population
      self.skills = ko.observableArray(ko.utils.arrayMap(e.skills, function (item) {
        return new Skill(item);
      }));

      //Wire up dependency references
      function handleDependencies() {
        ko.utils.arrayForEach(e.skills, function (item) {
          if (item.dependsOn) {
            var dependent = Utils.getSkillById(self.skills(), item.id);
            ko.utils.arrayForEach(item.dependsOn, function (dependencyId) {
              var dependency = Utils.getSkillById(self.skills(), dependencyId);
              dependent.dependencies.push(dependency);
              dependency.dependents.push(dependent);
            });
          }
        });
      }

      handleDependencies();

      //Avatar properties
      self.avatarName = ko.observable('Name');
      //level = total of all points spent
      self.level = ko.computed(function () {
        var totalSkillPoints = 0;
        ko.utils.arrayForEach(self.skills(), function (skill) {
          totalSkillPoints += skill.points();
        });
        var totalLevel = totalSkillPoints + 1;
        window.jiathis_config.title = '@phodal 我是Level ' + totalLevel + ' Web Developer #Web技能树#';
        return totalLevel;
      });
      self.noPointsSpent = ko.computed(function () {
        return !Boolean(ko.utils.arrayFirst(self.skills(), function (skill) {
          return (skill.points() > 0);
        }));
      });
      self.stats = ko.computed(function () {
        var totals = {
          '魅力': 9,
          '灵巧': 9,
          '坚韧': 9,
          '智力': 9,
          '力量': 9,
          '智慧': 9
        };
        //get all the skill name/value pairs and add/create them, using the stat name as the index
        ko.utils.arrayForEach(self.skills(), function (skill) {
          var p = skill.points();
          if (p > 0) {
            ko.utils.arrayForEach(skill.stats, function (stat) {
              var total = totals[stat.title] || 0;
              total += stat.value * p; //multiply the stat value by the points spent on the skill
              totals[stat.title] = total;
            });
          }
        });
        //Translate into a view-friendly array
        var result = [];
        for (var statName in totals) {
          result.push({
            title: statName,
            value: totals[statName]
          });
        }
        return result;
      });
      //String of unique characteristics, comma delimeted
      self.talentSummary = ko.computed(function () {
        var a = [];
        ko.utils.arrayForEach(self.skills(), function (skill) {
          if (skill.hasPoints()) {
            a = a.concat(skill.talents);
          }
        });
        window.jiathis_config.summary = '我获得的称号有: ' + a.join(', ');
        return a.join(', ');
      });
      //Portrait stuff
      self.portrait = ko.observable(Math.ceil(Math.random() * numPortraits));
      self.portraitURL = ko.computed(function () {
        if(self.avatarName() !== 'Name') {
          return 'https://avatars.githubusercontent.com/' + self.avatarName();
        } else{
          return 'app/images/portraits/portrait-' + self.portrait() + '.jpg';
        }
      });
      self.choosePreviousPortrait = function () {
        var n = self.portrait() - 1;
        if (n < 1) {
          n = numPortraits;
        }
        self.portrait(n);
      };
      self.chooseNextPortrait = function () {
        var n = self.portrait() + 1;
        if (n > numPortraits) {
          n = 1;
        }
        self.portrait(n);
      };

      //Utility functions
      self.newbMode = function () {
        ko.utils.arrayForEach(self.skills(), function (skill) {
          skill.points(0);
        });
      };

      //Hash functions
      self.hash = ko.computed(function () {
        var a = [];
        //compile a flat list of skill ids and values
        ko.utils.arrayForEach(self.skills(), function (skill) {
          if (skill.hasPoints()) {
            a.push(String.fromCharCode(skill.id + asciiOffset)); //convert skill id to letter of the alphabet
            if (skill.hasMultiplePoints()) {
              a.push(skill.points());
            } //only include points if they are > 1
          }
        });
        window.jiathis_config.url = window.location.href;
        return ['', a.join(''), self.portrait(), self.avatarName()].join(hashDelimeter);
      });

      //update the address bar when the hash changes
      //Update the skill tree based on a new hash
      self.updateLastHash = function (hash) {
        if (!hash) {
          return;
        } else {
          self.newbMode();

          var hashParts = hash.split(hashDelimeter);
          if (hashParts[2]) {
            self.portrait(Number(hashParts[2]));
          } //use the segment after the second delimeter as the portrait index
          if (hashParts[3]) {
            self.avatarName(hashParts[3]);
          } //use the segment after the third delimeter as the avatar name

          var skills_hash = hashParts[1]; //use the segment after the first delimeter as the skill hash

          var pairs = Utils.getSkillsByHash(skills_hash, self.skills(), asciiOffset);
          //cycle through the whole list, adding points where possible, until the list is depleted
          var pointsWereAllocated = true; //flag
          var handlePair = function (pair) {
            if (!pair.wasAllocated && pair.skill.canAddPoints()) { //only add points once, and only where possible
              pair.skill.points(Math.min(pair.skill.maxPoints, pair.points)); //don't add more points than allowed
              pair.wasAllocated = true; //don't add this one again
              pointsWereAllocated = true;
            }
          };
          while (pointsWereAllocated) {
            pointsWereAllocated = false; //assume the list is depleted by default
            ko.utils.arrayForEach(pairs, handlePair);
          }

          do_update_hash = true;
        }
      };

      //update the address bar when the hash changes
      function useLastHash() {
        self.updateLastHash(lastHash);
      }

      function updateHash(s) {
        window.location.hash = s || newHash;
      }

      var lastHash, usehash_timeout, newHash, update_hash_timeout, do_update_hash = true;
      self.useHash = function (hash) {
        lastHash = hash;
        clearTimeout(usehash_timeout);
        usehash_timeout = setTimeout(useLastHash, 50);
      };

      self.hash.subscribe(function (newValue) {
        if (do_update_hash) {
          newHash = newValue;
          clearTimeout(update_hash_timeout);
          update_hash_timeout = setTimeout(updateHash, 50);
        }
      });

      window.onhashchange = function () {
        self.useHash(window.location.hash.substr(1));
      };

      var current_hash = window.location.hash.substr(1);
      self.useHash(current_hash);

      self.clear = function () {
        window.location = '';
      };
      self.noAvatarName = ko.computed(function () {
        return !Boolean(self.avatarName() !== 'Name');
      });
      self.canShare = ko.computed(function () {
        return Boolean(self.avatarName() !== 'Name');
      });
    };

    return TalentTree;
  });
