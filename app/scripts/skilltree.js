(function($, ko){

	//Private utilities
	function namespace(namespaceString) {
		var parts = namespaceString.split('.'),
			parent = window,
			currentPart = '';

		for(var i = 0, length = parts.length; i < length; i++) {
			currentPart = parts[i];
			parent[currentPart] = parent[currentPart] || {};
			parent = parent[currentPart];
		}

		return parent;
	}
	function prettyJoin(array) {
		if(array.length >2) array = [array.slice(0,array.length-1).join(', '), array[array.length-1]];
		return array.join(' and ');
	}

	//Custom binding handlers
	ko.bindingHandlers.rightClick = {
		init: function(element, valueAccessor) {
			$(element).on('mousedown', function(event) {
				if(event.which==3) valueAccessor()();
			}).on('contextmenu', function(event) {
				event.preventDefault();
			});
		}
	};

	//tft.skilltree namespace
	(function(ns) {

		//VM for the entire UI
		var Calculator = ns.Calculator = function(_e){
			var e = _e || {};
			var self = function(){};

			//constants for hash generation
			var asciiOffset = 96; //64 for caps, 96 for lower
			var hashDelimeter = '_';

			var numPortraits = e.numPortraits || 1;

			//Intro vs Talent Tree UI state
			self.isOpen = ko.observable(true);
			self.open = function() {
				self.isOpen(true);
			};
			self.close = function() {
				self.isOpen(false);
			};
			self.toggle = function() {
				self.isOpen(!self.isOpen());
			};

			//Mega skill list population
			self.skills = ko.observableArray(ko.utils.arrayMap(e.skills, function(item){
				return new Skill(item, self.skills, e.learnTemplate);
			}));
			function getSkillById(id) {
				return ko.utils.arrayFirst(self.skills(), function(item){
					return item.id == id;
				});
			}
			//Wire up dependency references
			ko.utils.arrayForEach(e.skills, function(item){
				if(item.dependsOn) {
					var dependent = getSkillById(item.id);
					ko.utils.arrayForEach(item.dependsOn, function(dependencyId){
						var dependency = getSkillById(dependencyId);
						dependent.dependencies.push(dependency);
						dependency.dependents.push(dependent);
					});
				}
			});

			//Avatar properties
			self.avatarName = ko.observable('Your Name');
			//level = total of all points spent
			self.level = ko.computed(function(){
				var totalSkillPoints = 0;
				ko.utils.arrayForEach(self.skills(), function(skill){
					totalSkillPoints += skill.points();
				});
				return totalSkillPoints + 1;
			});
			self.noPointsSpent = ko.computed(function(){
				return !Boolean(ko.utils.arrayFirst(self.skills(), function(skill){
					return (skill.points() > 0);
				}));
			});
			self.stats = ko.computed(function(){
				//set some defaults
				var totals = e.defaultStats || {};
				//get all the skill name/value pairs and add/create them, using the stat name as the index
				ko.utils.arrayForEach(self.skills(), function(skill){
					var p = skill.points();
					if(p>0) ko.utils.arrayForEach(skill.stats, function(stat){
						var total = totals[stat.title] || 0;
						total += stat.value * p; //multiply the stat value by the points spent on the skill
						totals[stat.title] = total;
					});
				});
				//Translate into a view-friendly array
				var result = [];
				for(var statName in totals) {
					result.push({
						title:statName
						, value:totals[statName]
					});
				}
				return result;
			});
			//String of unique characteristics, comma delimeted
			self.talentSummary = ko.computed(function(){
				var a = [];
				ko.utils.arrayForEach(self.skills(), function(skill){
					if(skill.hasPoints()) a = a.concat(skill.talents)
				});
				return a.join(', ');
			});
			//Portrait stuff
			self.portrait = ko.observable(Math.ceil(Math.random() * numPortraits));
			self.portraitURL = ko.computed(function(){
				return (e.portraitPathTemplate || 'img/portraits/portrait-{n}.jpg').replace('{n}', self.portrait());
			});
			self.choosePreviousPortrait = function(){
				var n = self.portrait() - 1;
				if(n<1) n = numPortraits;
				self.portrait(n);
			};
			self.chooseNextPortrait = function(){
				var n = self.portrait() + 1;
				if(n>numPortraits) n = 1;
				self.portrait(n);
			};

			//Utility functions
			self.newbMode = function(){
				ko.utils.arrayForEach(self.skills(), function(skill){
					skill.points(0);
				});
			};
			self.godMode = function(){
				ko.utils.arrayForEach(self.skills(), function(skill){
					skill.points(skill.maxPoints);
				});
			};

			//Hash functions
			self.hash = ko.computed(function(){
				var a = [];
				//compile a flat list of skill ids and values
				ko.utils.arrayForEach(self.skills(), function(skill){
					if(skill.hasPoints()) {
						a.push(String.fromCharCode(skill.id + asciiOffset)); //convert skill id to letter of the alphabet
						if(skill.hasMultiplePoints()) a.push(skill.points()); //only include points if they are > 1
					}
				});
				return ['', a.join(''), self.portrait(), self.avatarName()].join(hashDelimeter);
			});
			//Update the skill tree based on a new hash
			function useHash(hash) {
				if(hash) {
					doUpdateHash = false;
					self.newbMode();

					var hashParts = hash.split(hashDelimeter);
					if(hashParts[2]) self.portrait(Number(hashParts[2])); //use the segment after the second delimeter as the portrait index
					if(hashParts[3]) self.avatarName(hashParts[3]); //use the segment after the third delimeter as the avatar name

					var s = hashParts[1]; //use the segment after the first delimeter as the skill hash

					var pairs = [];

					//break the hash back down into skill/value pairs, one character at a time
					var hashCharacters = s.split('');
					for(var i=0; i<hashCharacters.length; i++) {
						if(!Number(hashCharacters[i])) { //if the current character is not a number,
							var skill = getSkillById(hashCharacters[i].charCodeAt(0)-asciiOffset) //convert the character to a skill id and look it up
							if(skill) {
								var points = Number(hashCharacters[i+1]) || 1; //default to 1 point if the number is not specified next
								pairs.push({
									skill: skill
									, points: points
								})
							}
						}
					}

					//cycle through the whole list, adding points where possible, until the list is depleted
					var pointsWereAllocated = true; //flag
					while(pointsWereAllocated) {
						pointsWereAllocated = false; //assume the list is depleted by default
						ko.utils.arrayForEach(pairs, function(pair){
							if(!pair.wasAllocated && pair.skill.canAddPoints()) { //only add points once, and only where possible
								pair.skill.points(Math.min(pair.skill.maxPoints, pair.points)); //don't add more points than allowed
								pair.wasAllocated = true; //don't add this one again
								pointsWereAllocated = true;
							}
						});
					}

					doUpdateHash = true;
				}
			};

			//Hash throttling

			//update the address bar when the hash changes
			function useLastHash() {
				useHash(lastHash);
			}
			function updateHash(s) {
				window.location.hash = s || newHash;
			}
			var lastHash, useHash_timeout, newHash, updateHash_timeout, doUpdateHash = true;
			self.useHash = function(hash) {
				lastHash = hash;
				clearTimeout(useHash_timeout);
				useHash_timeout = setTimeout(useLastHash, 50);
			}
			self.hash.subscribe(function(newValue){
				if(doUpdateHash) {
					newHash = newValue;
					clearTimeout(updateHash_timeout);
					updateHash_timeout = setTimeout(updateHash, 50);
				}
			});

			window.onhashchange = function () {
				self.useHash(window.location.hash.substr(1));
			};

			//Launch
			var currentHash = window.location.hash.substr(1);
			self.isOpen(currentHash != ''); //If there is a hash, open the skill tree by default
			self.useHash(currentHash);

			return self;
		}
		//VM for individual skills
		var Skill = ns.Skill = function(_e, allSkills, learnTemplate){
			var e = _e || {};
			var self = function(){};

			//Basic properties
			self.id = e.id || 0;
			self.title = e.title || 'Unknown Skill';
			self.description = e.description;
			self.maxPoints = e.maxPoints || 1;
			self.points = ko.observable(e.points || 0);
			self.links = ko.utils.arrayMap(e.links, function(item){
				return new Link(item);
			});
			self.dependencies = ko.observableArray([]);
			self.dependents = ko.observableArray([]);
			self.stats = e.stats || [];
			self.rankDescriptions = e.rankDescriptions || [];
			self.talents = e.talents || [];

			//Computed values
			self.hasDependencies = ko.computed(function(){
				return self.dependencies().length > 0;
			});
			self.dependenciesFulfilled = ko.computed(function(){
				var result = true;
				ko.utils.arrayForEach(self.dependencies(), function(item) {
					if(!item.hasPoints()) result = false;
				});
				return result;
			});
			self.dependentsUsed = ko.computed(function(){
				var result = false;
				ko.utils.arrayForEach(self.dependents(), function(item) {
					if(item.hasPoints()) result = true;
				});
				return result;
			});
			self.hasPoints = ko.computed(function(){
				return self.points() > 0;
			});
			self.hasMultiplePoints = ko.computed(function(){
				return self.points() > 1;
			});
			self.hasMaxPoints = ko.computed(function(){
				return self.points() >= self.maxPoints;
			});
			self.canAddPoints = ko.computed(function(){
				return self.dependenciesFulfilled() && !self.hasMaxPoints();
			});
			self.canRemovePoints = ko.computed(function(){
				//Only allow points to be removed if:
				//	(A) There are dependents being used but more than one point spent here OR
				//	(B) There are NO dependents being used and any number of points spent here
				return (self.dependentsUsed() && self.hasMultiplePoints()) || (!self.dependentsUsed() && self.hasPoints());
			});
			//Summarize what the user needs to unlock this skill (if anything)
			self.helpMessage = ko.computed(function(){
				if(!self.dependenciesFulfilled()){
					var s = [];
					ko.utils.arrayForEach(self.dependencies(), function(item) {
						if(!item.hasMaxPoints()) s.push(item.title);
					});
					return (learnTemplate || 'Learn {n} to unlock.').replace('{n}', prettyJoin(s));
				}
				return '';
			});
			self.talentSummary = ko.computed(function(){
				return self.talents.join(', ');
			});
			self.currentRankDescription = ko.computed(function(){
				return self.rankDescriptions[self.points()-1];
			});
			self.nextRankDescription = ko.computed(function(){
				return self.rankDescriptions[self.points()];
			});

			//Methods
			self.addPoint = function() {
				if(self.canAddPoints()) self.points(self.points() + 1);
			}
			self.removePoint = function() {
				if(self.canRemovePoints()) self.points(self.points() - 1);
			}

			return self;
		}
		//VM for a simple hyperlink
		var Link = ns.Link = function(_e){
			var e = _e || {};
			var self = function(){};

			//Basic properties
			self.label = e.label || (e.url || 'Learn more');
			self.url = e.url || 'javascript:void(0)';

			return self;
		}
	})(namespace('tft.skilltree'));

})(window.jQuery, window.ko);