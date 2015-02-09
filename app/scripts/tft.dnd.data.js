/*{
	id: 2
	, title: 'HTML'
	, maxPoints: 3 //default 1
	, description: 'The main language for creating web pages, written in the form of tags enclosed in angle brackets (like <html>).'
	, rankDescriptions: [
		'You understand how to create a basic web page.'
		, 'You understand how to use various tags and attributes to format and organize content.'
	]
	, dependsOn: [1, 6]
	, links:[
		{
			label: 'w3schools.com HTML Tutorial'
			, url: 'http://www.w3schools.com/html/'
		}
	]
	, stats: [
		{
			title: 'Intellect'
			, value: 10
		}
	]
}*/

/*
"The bones have spoken!" - High Aldwin, Willow

*/

(function(){
	(function(ns) {
		ns.data = {
			skills: [
				{
					id: 1
					, title: 'HTML'
					, description: 'The main language for creating web pages, HTML is written in the form of tags enclosed in angle brackets (like <html>).'
					, rankDescriptions: [
						'You understand how to create and view a basic web page.'
						, 'You understand how to link pages together, design multi-column layouts, and work with form fields and media elements.'
					]
	                , links: [
	                    {
	                        label: 'HTML.net Tutorials'
                            , url: 'http://www.html.net/tutorials/html/'
	                    }
		                , {
		                    label: 'Sublime Text 3, a great code editor'
			                , url: 'http://www.sublimetext.com/'
		                }
	                ]
					, maxPoints: 2
					, stats: [
						{
							title: 'Intellect'
							, value: 1
						}
						,{
							title: 'Charisma'
							, value: 1
						}
						,{
							title: 'Strength'
							, value: 1
						}
					]
				},

				{
					id: 2
					, title: 'CSS'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'CSS Tutorials'
			                , url: 'http://www.htmldog.com/guides/css/'
		                }
	                    , {
	                        label: 'Can I use... (browser support)'
                            , url: 'http://caniuse.com/#cats=CSS'
	                    }
	                ]
					, maxPoints: 2
					, stats: [
						{
							title: 'Charisma'
							, value: 3
						}
					]
	                , rankDescriptions: [
                        'You are familiar with the basics of CSS formatting and the box model.'
                        , 'You are familiar with media queries and responsive design for adapting your design to fit different devices.'
	                ]
                    , description: 'Cascading Style Sheets (CSS) is a language for styling web pages.  CSS rules target elements in the HTML document to specify the presentation, such as font, color, spacing, and size.'
					, talents: ['Stylish']
				},
				{
					id: 3
					, title: 'CSS Tools'
					, dependsOn: [2]
	                , links: [
		                {
		                    label: 'Sass vs. LESS'
			                , url: 'http://css-tricks.com/sass-vs-less/'
		                }
	                    , {
	                        label: 'LESS'
                            , url: 'http://lesscss.org/'
	                    }
	                    , {
	                        label: 'Sass'
                            , url: 'http://sass-lang.com/'
	                    }
	                    , {
	                        label: 'Stylus'
                            , url: 'http://learnboost.github.io/stylus/'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You are familiar with variables and nesting.'
                        , 'You can use advanced tools like mix-ins and sometimes write your own.'
	                ]
                    , description: 'Preprocessors like LESS and SASS help you write more structured and efficient CSS by adding features like variables, functions, and nesting.'
					, stats: [
						{
							title: 'Charisma'
							, value: 2
						}
						, {
							title: 'Dexterity'
							, value: 1
						}
					]
				},
				{
					id: 4
					, title: 'Web Design Mastery'
					, dependsOn: [2]
                    , description: 'You can bring design ideas to life by translating them into the requisite HTML document with CSS styles.'
					, stats: [
						{
							title: 'Charisma'
							, value: 10
						}
					]
				},
				{
					id: 5
					, title: 'jQuery Effects'
					, dependsOn: [4]
	                , links: [
		                {
		                    label: 'Codecademy jQuery'
			                , url: 'http://www.codecademy.com/tracks/jquery'
		                }
	                    , {
	                        label: 'jQuery Category: Manipulation'
                            , url: 'http://api.jquery.com/category/manipulation/'
	                    }
	                    , {
	                        label: 'jQuery Category: Effects'
                            , url: 'http://api.jquery.com/category/effects/'
	                    }
	                ]
					, maxPoints: 3
	                , rankDescriptions: [
                        'You are familiar with manipulating the document object model (DOM) - modifying values, content, properties, entire elements, etc.'
                        , 'You are familiar with adding standard animation to a web page.'
                        , 'You are familiar with creating and adding custom effects to a web page.'
	                ]
                    , description: 'jQuery provides techniques and methods for client-side manipulation of the web page elements.'
					, talents: ['Sizzlin']
					, stats: [
						{
							title: 'Charisma'
							, value: 2
						}
						, {
							title: 'Dexterity'
							, value: 1
						}
					]
				},

				{
					id: 6
					, title: 'Search Engine Optimization (SEO)'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'Search Engine Optimization (Google)'
			                , url: 'https://support.google.com/webmasters/answer/35291'
		                }
	                    , {
	                        label: 'Webmaster Tools (Google)'
                            , url: 'http://www.google.com/webmasters/tools/'
	                    }
	                    , {
	                        label: 'Bing - Webmaster Tools'
                            , url: 'http://www.bing.com/toolbox/webmaster'
	                    }
	                ]
                    , description: 'The process of affecting the ranking/visibility of a website or web page in a search engines results.'
					, stats: [
						{
							title: 'Intellect'
							, value: 2
						}
						, {
							title: 'Wisdom'
							, value: 1
						}
					]
				},
				{
					id: 7
					, title: 'Analytics'
					, dependsOn: [6]
	                , links: [
		                {
		                    label: '10 SEO Analysis Tools You Should Be Using'
			                , url: 'http://www.webgnomes.org/blog/10-seo-analysis-tools/'
		                }
	                    , {
	                        label: 'Configuring SEO data in Analytics (Google)'
                            , url: 'https://support.google.com/analytics/answer/1308621?hl=en'
	                    }
	                    , {
	                        label: 'Using the SEO Reports (Google)'
                            , url: 'http://www.bing.com/toolbox/webmaster'
	                    }
	                    , {
	                        label: 'Bing - SEO Analyzer'
                            , url: 'http://www.bing.com/toolbox/seo-analyzer'
	                    }
	                ]
                    , description: 'Analytics provide performance data about a website as well as information that is usable to measure the success of SEO.'
					, stats: [
						{
							title: 'Intellect'
							, value: 1
						}
						, {
							title: 'Wisdom'
							, value: 2
						}
					]
					, talents: ['Crafty']
				},

				{
					id: 8
					, title: 'Javascript'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'JavaScript Tutorial'
			                , url: 'http://www.htmldog.com/guides/javascript/'
		                }
	                    , {
	                        label: 'Codecademy JavaScript'
                            , url: 'http://www.codecademy.com/tracks/javascript'
	                    }
	                    , {
	                        label: 'List of Videos for Beginner JavaScript'
                            , url: 'http://thenewboston.org/list.php?cat=10'
	                    }
	                    , {
	                    	label: 'Douglas Crockford on Javascript'
	                    	, url: 'http://javascript.crockford.com/'
	                    }
	                ]
                    , description: 'JavaScript is the dominant language for client-side programming.  It executes in the user&rsquo;s browser to manipulate the HTML document after it has loaded.  This may be as simple as showing hidden elements, or more advanced like contacting the server to load more data.'
					, stats: [
						{
							title: 'Dexterity'
							, value: 3
						}
					]
				},
				{
					id: 9
					, title: 'JS Libraries & Frameworks'
					, dependsOn: [8]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You tap into libraries like jQuery, MooTools, Prototype, Dojo, and YUI to streamline your work.'
                        , 'You use frameworks like KnockoutJS, Ember.js, AngularJS, and Backbone.js to structure complex frontend functionality.'
	                ]
                    , description: 'Once you&rsquo;re comfortable with the JavaScript language, there&rsquo;s a multitude of libraries and frameworks to accomplish common tasks and enhance your development.'
					, stats: [
						{
							title: 'Dexterity'
							, value: 2
						}
						, {
							title: 'Wisdom'
							, value: 1
						}
					]
					, talents: ['Nimble']
				},
				{
					id: 10
					, title: 'Front-end Development Mastery'
					, dependsOn: [9]  
					, stats: [
						{
							title: 'Dexterity'
							, value: 10
						}
					]
				},

				{
					id: 11
					, title: 'Server-side Programming'
					, dependsOn: [1]
	                , links: [
                        {
	                        label: 'Server-side scripting Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Server-side_scripting'
	                    }
	                ]
                    , description: 'Developing items (code) that executes on the server (server-side) instead of the user&raquo;s (client&raquo;s) machine.'
					, stats: [
						{
							title: 'Strength'
							, value: 3
						}
					]
				},
				{
					id: 12
					, title: 'Server-side Frameworks'
					, dependsOn: [11]
	                , links: [
                        {
                            label: 'Comparison of web application frameworks'
                            , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks'
                        }
	                    , {
				            label: 'Web development - server side coding'
                            , url: 'http://en.wikipedia.org/wiki/Web_development#Server_side_coding'
                        }
	                ]
                    , description: 'These are software frameworks and collection of packages or modules that allow developers to write applications or services without having to handle the overhead of common activities and lower level details, such as session management, database access, etc.'
					, stats: [
						{
							title: 'Strength'
							, value: 2
						}
						, {
							title: 'Wisdom'
							, value: 1
						}
					]
					, talents: ['Beefcake']
				},

				{
					id: 13
					, title: 'Database Authoring'
					//, dependsOn: [1]
	                , links: [
		                {
		                    label: 'w3schools.com SQL Tutorial'
			                , url: 'http://www.w3schools.com/sql/'
		                }                    
	                    ,{
				            label: 'SQLZOO Interactive SQL Tutorial'
                            , url: 'http://sqlzoo.net/wiki/'
	                    }                    
	                    ,{
	                        label: 'Database Normalization Wiki'
                            , url: 'https://en.wikipedia.org/wiki/Database_normalization'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You understand how to setup tables.'
                        , 'You understand how relational databases organize data.'
	                ]
                    , description: 'Databases are powerful engines for storing, organizing, and retrieving data.  There is a wide variety of database platforms to choose from.  The most widely used database language is Structured Query Language (SQL).  Properly architecting your data will facilitate your site&rsquo;s server-side programming.'
					, stats: [
						{
							title: 'Strength'
							, value: 3
						}
					]
				},
				{
					id: 14
					, title: 'Advanced DB Management'
					, dependsOn: [13]
	                , links: [
	                    {
	                        label: 'Stored Procedure - Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Stored_procedure'
	                    }
		                , {
		                    label: 'User-defined function Wiki'
			                , url: 'http://en.wikipedia.org/wiki/User_defined_function'
		                }
	                    , {
	                        label: 'Database Tuning Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Database_tuning'
	                    }
	                    , {
	                        label: 'Performance Monitoring and Tuning How-to Topics (SQL Server)'
                            , url: 'http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx'
	                    }
	                    , {
	                        label: 'Sql Server Performance Tuning Tips'
                            , url: 'http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/'
	                    }
	                    , {
	                        label: 'Oracle database Performance Tuning FAQ'
                            , url: 'http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You write stored procedures and user-defined functions for more efficient querying.'
                        , 'You can detect causes of performance deficiencies and fine tune a database like a rock star.'
	                ]
                    , description: 'Besides creating basic tables and relating data, databases allow for the creation of stored procedures, sets of SQL statements that are stored in the database, and user-defined functions (UDFs) , functions that can be used in SQL statements.  Just architecting the database is not enough.  The database also needs to be optimized or tuned to increase performance.'
					, stats: [
						{
							title: 'Strength'
							, value: 2
						}
						, {
							title: 'Dexterity'
							, value: 1
						}
					]
					, talents: ['XXL Knapsack']
				},

				{
					id: 15
					, title: 'Server-side Development Mastery'
					, dependsOn: [12, 14]
                    , description: 'You are capable of architecting and building an application\'s backend to efficiently store and retrieve data.'
					, stats: [
						{
							title: 'Strength'
							, value: 10
						}
					]
				},
				{
					id: 16
					, title: 'User Authentication and Authorization'
					, dependsOn: [15]
	                , links: [
	                    {
	                        label: 'ASP.NET authentication and authorization - CodeProject'
                            , url: 'http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization'
	                    }
		                ,{
		                    label: 'OpenID Wiki (authentication)'
			                , url: 'http://en.wikipedia.org/wiki/OpenID'
		                }
	                    , {
	                        label: 'OAuth Community'
                            , url: 'http://oauth.net/'
	                    }
	                    , {
	                        label: 'ASP.NET Authorization'
                            , url: 'http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx'
	                    }
	                ]
                    , description: 'Authentication is the process determining whether someone or something is who or what it is declared to be. Authorization is the process of determining if a user is allowed to perform an action or has access to a resource.'
					, stats: [
						{
							title: 'Fortitude'
							, value: 5
						}
					]
					, talents: ['Truthseeker']
				},
				{
					id: 17
					, title: 'AJAX & APIs'
					, dependsOn: [10, 15]
	                , links: [
	                    {
	                        label: 'AJAX (programming) Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Ajax_(programming)'
	                    }
		                ,{
		                    label: 'List of Videos for AJAX'
			                , url: 'http://thenewboston.org/list.php?cat=61'
		                }
		                ,{
		                    label: 'Ajax: The Official Microsoft ASP.NET Site'
			                , url: 'http://www.asp.net/ajax'
		                }
	                    , {
	                        label: 'Web Service Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Web_service'
	                    }
	                    , {
	                        label: 'Representational state transfer (REST) Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Representational_state_transfer'
	                    }
                    ]
                    , description: 'Technology exists to allow separate systems to communicate between each other in various ways as well as allowing interfaces to be more intractive.  These include the use of Asynchronous JavaScript and XML (AJAX), usually on the client-side, to communicate with an external system.  Other technologies, such as web services, are used to setup end-points for allowing communication with an external system.'
					, stats: [
						{
							title: 'Strength'
							, value: 1
						}
						,{
							title: 'Dexterity'
							, value: 1
						}
						,{
							title: 'Intellect'
							, value: 1
						}
					]
					, talents: ['Mindweaver']
				},

				{
					id: 18
					, title: 'User Discovery'
					, maxPoints: 2
					, rankDescriptions: [
						'You know the right questions to ask, and use sketches to confirm your ideas.'
						, 'You use advanced techniques like experience mapping to lead conversations with stakeholders.'
					]
	                , links: [
	                 	{ 
	                 		label: 'The anatomy of an experience map'
	                 		, url: 'http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map'
	                 	}
	                ]
                    , description: 'One of the first steps taken before anything is designed is to determine what the client (both the site requestor and the site user) wants and/or needs. Techniques include simple sketching, card-sortting and experience mapping.'
					, stats: [
						{
							title: 'Wisdom'
							, value: 2
						}
						,{
							title: 'Charisma'
							, value: 1
						}
					]
					, talents: ['Mindreader']
				},
				{
					id: 19
					, title: 'Graphic Design'
					, maxPoints: 2
					, rankDescriptions: [
						'You can create a balanced, complementary layout with a clear message.'
						, 'You understand how to create a strikingly unique design, which supports traditional design values as well as your underlying message.'
					]
					, dependsOn: [18]
	                , links: [
	                    {
	                        label: 'Graphic Design Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Graphic_design'
	                    }
		                ,{
		                    label: 'Behance'
			                , url: 'http://www.behance.net/'
		                }
	                    , {
	                        label: 'User experience design Wiki'
                            , url: 'http://en.wikipedia.org/wiki/User_experience_design'
	                    }
		                ,{
		                    label: 'Awwwards'
			                , url: 'http://www.awwwards.com/'
		                }
	                ]
                    , description: 'Graphic design is about aesthetics and usability. Good designs are inviting and easy to understand, by solid use of color, typography, balance, hierarchy and white space.'
					, stats: [
						{
							title: 'Charisma'
							, value: 3
						}
					]
					, talents: ['Artistic']
				},
				{
					id: 20
					, title: 'Graphic Design Tools'
					, dependsOn: [19]
	                , links: [
                        {
	                        label: '100 Top Tools for Graphic Designers | Graphic Design Classes'
                            , url: 'http://graphicdesignclasses.net/design-tools/'
	                    }
	                ]
                    , description: 'Software such as Photoshop and devices like drawing tablets are used to create layouts, work with type, touch-up photos, and other activities to add professional polish to your designs.'
					, stats: [
						{
							title: 'Charisma'
							, value: 2
						}
						,{
							title: 'Intellect'
							, value: 1
						}
					]
				},
				{
					id: 21
					, title: 'Prototypes'
					, dependsOn: [18]
	                , links: [
		                {
		                    label: 'Design Better And Faster With Rapid Prototyping'
			                , url: 'http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/'
		                }
	                    , {
	                        label: '16 Design Tools for Prototyping and Wireframing'
                            , url: 'http://www.sitepoint.com/tools-prototyping-wireframing/'
	                    }
	                ]
                    , description: 'Modeling a new design without building all the underlying functionality is a fast and efficient way to convey ideas, test a new concept, and identify problems you didn\'t anticipate.'
					, stats: [
						{
							title: 'Wisdom'
							, value: 1
						}
						,{
							title: 'Intellect'
							, value: 2
						}
					]
					, talents: ['Conjurer']
				},
				{
					id: 22
					, title: 'User Experience Design Mastery'
					, dependsOn: [19, 21]
                    , description: 'You are capable of converting project requirements to an attractive design that promotes a pleasant user experience.'
					, stats: [
						{
							title: 'Wisdom'
							, value: 1
						}
						,{
							title: 'Charisma'
							, value: 2
						}
					]
				},
				{
					id: 23
					, title: 'User Testing'
					, dependsOn: [22]
	                , links: [
		                {
		                    label: 'My big list of 24 Web Site Usability Testing Tools'
			                , url: 'http://www.usefulusability.com/24-usability-testing-tools/'
		                }
	                    , {
	                        label: 'Usability Testing Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Usability_testing'
	                    }
	                ]
                    , description: 'It is a technique, also known as usability testing, that is used to evaluate a website by testing it on users.'
                    , stats: [
						{
							title: 'Charisma'
							, value: 1
						}
						,{
							title: 'Wisdom'
							, value: 2
						}
					]
					, talents: ['Alchemist']
				},

				{
					id: 24
					, title: 'Server Administration'
	                , links: [
		                {
		                    label: 'Comparison of web server software Wiki'
			                , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_server_software'
		                }
	                    , {
	                        label: 'Apache mod_rewrite - Apache HTTP Server'
                            , url: 'http://httpd.apache.org/docs/2.4/rewrite/'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You are capable of setting up your application in a new environment.'
                        , 'You are familiar with server-side URL rewriting tools like mod_rewrite.'
	                ]
                    , description: 'Even the simplest web applications will require a server to run them.  There are several popular and fully-featured web servers to choose from, though your application\'s server-side programming language may limit your options.  Learning to manage and configure your web server will help you keep your site up and running smoothly.'
                    , stats: [
						{
							title: 'Fortitude'
							, value: 3
						}
					]
					, talents: ['Stewardship']
				},
				{
					id: 25
					, title: 'Deployment'
					, dependsOn: [24]
	                , links: [
		                {
		                    label: 'SSL Certificate Installation'
			                , url: 'http://www.sslshopper.com/ssl-certificate-installation.html'
		                }
	                    , {
	                        label: 'Minimize payload size - Google Developers'
                            , url: 'https://developers.google.com/speed/docs/best-practices/payload'
	                    }
	                    , {
	                        label: 'Parallelize downloads across hostnames - Google Developers'
                            , url: 'https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You minify your public-facing files and serve compressed files to save bandwidth and improve your site&raquo;s speed.'
                        , 'You secure sensitive traffic over HTTPS using an SSL certificate.'
	                ]
                    , description: 'Before sharing your application with the world, follow the best practices for security and performance on the server.'
                    , stats: [
						{
							title: 'Fortitude'
							, value: 2
						}
						,{
							title: 'Dexterity'
							, value: 1
						}
					]
					, talents: ['Spectral Guide']
				},

				{
					id: 26
					, title: 'Web Development Mastery'
					, dependsOn: [4, 5, 10, 15, 22, 25]
	                , links: [
		                {
		                    label: 'Web Development Wiki'
			                , url: 'http://en.wikipedia.org/wiki/Web_development'
		                }
	                ]
                    , description: 'This refers to designing, creating, and maintaining a website.'
					, stats: [
						{
							title: 'Charisma'
							, value: 3
						}
						,{
							title: 'Dexterity'
							, value: 3
						}
						,{
							title: 'Fortitude'
							, value: 3
						}
						,{
							title: 'Intellect'
							, value: 3
						}
						,{
							title: 'Strength'
							, value: 3
						}
						,{
							title: 'Wisdom'
							, value: 3
						}
					]
					, talents: ['Demigod']
				}

			]
		}
	})(namespace('tft.dnd'));
})();