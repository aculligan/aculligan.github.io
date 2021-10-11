var introLock=0;
var videoInterval;
var targetSub=0;
var projectName="Pioneer Intermediate B1";
//version 1.0


var Subs=[
{id:1,SubsArray : [{Start:9708,End:12541,Text:"221B Baker Street"},{Start:14125,End:17083,Text:"In Arthur Conan Doyle’s 1887 book"},{Start:17291,End:18625,Text:"<i>A Study in Scarlet,</i>"},{Start:19375,End:24250,Text:"Dr. Watson describes visiting 221B Baker Street"},{Start:24250,End:26583,Text:"for the first time with Sherlock Holmes."},{Start:27541,End:30458,Text:"He says it had a couple of comfortable bedrooms "},{Start:30750,End:32249,Text:"and a single sitting room,"},{Start:32875,End:35708,Text:"cheerfully furnished with two large windows."},{Start:36666,End:39083,Text:"It became the home of Sherlock Holmes"},{Start:39416,End:40750,Text:"and featured in almost "},{Start:40750,End:43750,Text:"all of Conan Doyle’s Sherlock Holmes mysteries."},{Start:45500,End:47250,Text:"When the Sherlock Holmes stories "},{Start:47250,End:48541,Text:"were first published,"},{Start:49083,End:49833,Text:"the house numbers "},{Start:49833,End:52166,Text:"on the actual Baker Street in London"},{Start:52458,End:54458,Text:"only went up to 85, "},{Start:54916,End:57000,Text:"which is probably why Conan Doyle"},{Start:57000,End:60541,Text:"chose 221B for his fictional hero."},{Start:62083,End:63291,Text:"In the 1930s, "},{Start:63291,End:65166,Text:"Baker Street was made longer "},{Start:65166,End:67125,Text:"and more numbers were added. "},{Start:67916,End:69833,Text:"The block containing the numbers"},{Start:69833,End:74250,Text:"215 to 229 was used by a bank. "},{Start:75208,End:77125,Text:"The bank received so many letters "},{Start:77125,End:79833,Text:"for Sherlock Holmes from all over the world "},{Start:80041,End:80708,Text:"that eventually"},{Start:80708,End:82750,Text:"they had to hire a permanent secretary "},{Start:82750,End:83708,Text:"to deal with them. "},{Start:84916,End:87291,Text:"In 1990 the Sherlock Holmes Museum"},{Start:87291,End:90416,Text:"opened at 239 Baker Street. "},{Start:91333,End:92333,Text:"Eventually,"},{Start:92333,End:93708,Text:"in 2005, "},{Start:93958,End:96208,Text:"it managed to change its official address "},{Start:96458,End:99541,Text:"to 221B without moving."},{Start:100500,End:104416,Text:"Today, any letters sent to 221B Baker Street "},{Start:104541,End:106666,Text:"go to the Sherlock Holmes Museum. "},{Start:107833,End:109875,Text:"On the first floor of the museum, "},{Start:110083,End:114000,Text:"you can find an exact copy of Sherlock Holmes’ home"},{Start:114208,End:116166,Text:"as it is described in the stories."},{Start:119000,End:120041,Text:"Wuthering Heights"},{Start:121333,End:124500,Text:"After the success of her sister Charlotte’s novel, "},{Start:124791,End:125791,Text:"<i>Jane Eyre,</i>"},{Start:125958,End:128666,Text:"Emily Brontë decided to write her own book"},{Start:128833,End:130499,Text:"called <i>Wuthering Heights.</i> "},{Start:131750,End:134333,Text:"She worked on the novel between October 1845 "},{Start:134333,End:136708,Text:"and June 1846"},{Start:137458,End:140208,Text:"and it was published in 1847."},{Start:140958,End:144000,Text:"Unfortunately she died the following year, "},{Start:144291,End:145791,Text:"so she never found out "},{Start:145791,End:147958,Text:"how successful her novel was. "},{Start:149000,End:151791,Text:"It received mixed reviews when it was first published, "},{Start:152458,End:155583,Text:"but now it is considered a classic of English literature. "},{Start:157125,End:157916,Text:"The story"},{Start:158125,End:161125,Text:"is set in Yorkshire in the 19th century. "},{Start:161916,End:163625,Text:"The main character is Heathcliff"},{Start:164208,End:166041,Text:"and he lives in a house called"},{Start:166041,End:167083,Text:"Wuthering Heights. "},{Start:168166,End:170583,Text:"Wuthering is a local word which means "},{Start:170625,End:173708,Text:"'wild exposed and storm-blown', "},{Start:174250,End:175583,Text:"and it fits perfectly"},{Start:175583,End:177625,Text:"with the themes involved in the novel."},{Start:179375,End:181083,Text:"There are many houses in Yorkshire "},{Start:181083,End:183666,Text:"which people believe inspired Brontë"},{Start:183666,End:185083,Text:"to write <i>Wuthering Heights,</i>"},{Start:185708,End:188166,Text:"but there is one that is considered to be "},{Start:188166,End:190791,Text:"closest to the fictional home in the novel. "},{Start:192166,End:195583,Text:"Top Withens is a ruined farmhouse near Haworth, "},{Start:195875,End:197000,Text:"West Yorkshire,"},{Start:197708,End:199708,Text:"a location which is exactly the same "},{Start:199708,End:201500,Text:"as the one described in the book. "},{Start:201958,End:204041,Text:"It is a popular walking destination "},{Start:204041,End:206166,Text:"from nearby Haworth and Stanbury,"},{Start:206583,End:209041,Text:"attracting visitors from all over the world. "},{Start:209958,End:213791,Text:"In fact, it receives so many Japanese literary tourists"},{Start:214166,End:216166,Text:"that some signs along the footpath "},{Start:216166,End:218125,Text:"have directions in Japanese."}]},
{id:2,SubsArray : [{Start:11541,End:13541,Text:"The original meaning of the word desert"},{Start:13541,End:15625,Text:" is “an abandoned place.” "},{Start:16333,End:19541,Text:"There are various ways to define what a desert is,   "},{Start:19541,End:23500,Text:"but it is typically an area of land with very little rain."},{Start:23500,End:25833,Text:" A desert usually receives approximately "},{Start:25833,End:28083,Text:" 16 inches of rain annually."},{Start:28625,End:30958,Text:" Around one third of the Earth's land surface "},{Start:30958,End:32541,Text:" is taken up by deserts."},{Start:33416,End:35666,Text:" The typical image of a hot dry place "},{Start:35666,End:37125,Text:" with endless sand dunes"},{Start:37125,End:39083,Text:" is actually not the most common"},{Start:39083,End:40333,Text:" kind of desert."},{Start:40958,End:43000,Text:" Only 20% of the world's deserts"},{Start:43000,End:43875,Text:" have sand."},{Start:44583,End:45708,Text:" The two largest deserts "},{Start:45708,End:46416,Text:"on the planet"},{Start:46416,End:48833,Text:" can be found in the Arctic and the Antarctic"},{Start:49208,End:50791,Text:" and are known as polar deserts,"},{Start:50791,End:52900,Text:" or cold deserts."},{Start:53208,End:55166,Text:" The largest hot desert on the planet"},{Start:55166,End:57583,Text:" is the Sahara in North Africa"},{Start:57583,End:59166,Text:" and it covers an area that spreads"},{Start:59166,End:61333,Text:" across 12 different countries."},{Start:61750,End:64166,Text:" It is about the same size as the U.S.A., "},{Start:64166,End:67125,Text:" and yet only about 3 million people live there."},{Start:67583,End:69916,Text:" It is one of the hottest places in the world"},{Start:69916,End:73500,Text:" and temperatures can reach 120&#176;F."},{Start:73958,End:76333,Text:" However, because it is very dry,"},{Start:76333,End:77875,Text:" from December to February,"},{Start:77875,End:79375,Text:" temperatures during the night"},{Start:79375,End:81458,Text:" can drop below freezing."},{Start:82041,End:83708,Text:" The driest desert in the world"},{Start:83708,End:86166,Text:" is the Atacama in South America."},{Start:86625,End:88333,Text:" The average rainfall in the area"},{Start:88333,End:92333,Text:" is just 0.04 of an inch every year, "},{Start:92333,End:93833,Text:" and some weather stations have"},{Start:93833,End:95875,Text:" never reported any rainfall."},{Start:96458,End:97750,Text:" The soil in the desert is"},{Start:97750,End:99541,Text:"similar to that on Mars,"},{Start:99541,End:101500,Text:" and NASA uses this desert"},{Start:101500,End:103625,Text:" to test instruments and equipment."},{Start:104291,End:106125,Text:" Plants and animals that live in deserts"},{Start:106125,End:107750,Text:" need to be able to survive"},{Start:107750,End:108916,Text:" the hard conditions."},{Start:109541,End:111333,Text:" Plants usually have very small"},{Start:111333,End:113458,Text:"  or no leaves, and deep roots"},{Start:113458,End:114541,Text:" to get water."},{Start:115041,End:117208,Text:" They often have long sharp thorns"},{Start:117208,End:119583,Text:" to prevent animals from eating them."},{Start:119583,End:121166,Text:" Animals need to keep cool"},{Start:121166,End:123375,Text:" and find whatever water they can."},{Start:123875,End:126250,Text:" Most desert animals are nocturnal"},{Start:126250,End:128541,Text:" and spend  the day resting in shade,"},{Start:128541,End:129958,Text:" if they can find it. "},{Start:130708,End:132166,Text:" Because of the conditions,"},{Start:132166,End:133333,Text:" deserts can be very"},{Start:133333,End:135583,Text:" dangerous places for humans."},{Start:136125,End:137125,Text:" Despite this,"},{Start:137125,End:139083,Text:" people have been living in desert areas"},{Start:139083,End:140833,Text:" for thousands of years,"},{Start:140833,End:143625,Text:" usually moving around a lot to find water,"},{Start:143625,End:146958,Text:" or rare places with vegetation called oases."},{Start:147458,End:150541,Text:"  Deserts are good places to find useful minerals, "},{Start:150541,End:151750,Text:" and not surprisingly    "},{Start:151750,End:153041,Text:" are an excellent place"},{Start:153041,End:154541,Text:" to produce solar energy."}]},
{id:3,SubsArray : [{Start:10958,End:14041,Text:" Borneo is the third largest island in the world,"},{Start:14041,End:15875,Text:" after New Guinea and Greenland,"},{Start:15875,End:21000,Text:" with an area of 743,330 square miles."},{Start:21250,End:24041,Text:" It is situated in the southeast of Asia"},{Start:24041,End:26958,Text:" and is divided between three countries:"},{Start:26958,End:29000,Text:" Indonesia,  Malaysia"},{Start:29000,End:31208,Text:" and the tiny country of Brunei,"},{Start:31208,End:34291,Text:" which only takes up 1% of the island."},{Start:35625,End:37708,Text:" Borneo has a tropical climate "},{Start:37708,End:39750,Text:"and is rich in wildlife."},{Start:39750,End:42750,Text:" It has one of the oldest rainforests in the world"},{Start:42750,End:45375,Text:" at 140 million years old."},{Start:45625,End:48000,Text:" It is home to 15,000 species "},{Start:48000,End:52000,Text:"of flowering plants, 3,000 species of trees,"},{Start:52000,End:54958,Text:" 221 species of land animals "},{Start:54958,End:57958,Text:" and 420 species of birds."},{Start:58541,End:60500,Text:" For over 150 years "},{Start:60500,End:62791,Text:"Borneo has attracted scientists,"},{Start:62791,End:65499,Text:" who have made many important discoveries."},{Start:65833,End:69250,Text:" Between 1995 and 2010,"},{Start:69250,End:72416,Text:" over 600 new species were discovered;"},{Start:72416,End:75041,Text:" that is 3 species every month."},{Start:75333,End:78458,Text:" Even today, scientists continue to discover"},{Start:78458,End:81500,Text:" new species, and research suggests"},{Start:81500,End:84833,Text:" they will continue to do so for decades to come."},{Start:85458,End:88541,Text:" Scientists believe the best place to find species"},{Start:88541,End:90375,Text:" is in the heart of the island,"},{Start:90375,End:94125,Text:" which has large areas of unexplored forest."},{Start:95291,End:98000,Text:" Probably the most famous resident of Borneo"},{Start:98000,End:99625,Text:" is the orangutan."},{Start:100083,End:102250,Text:" Orangutans only live on Borneo"},{Start:102250,End:104791,Text:" and the neighboring island of Sumatra."},{Start:105041,End:107666,Text:" Orangutan is a Malay word that means "},{Start:107666,End:109375,Text:" “person of the forest”"},{Start:109375,End:111916,Text:" and, not surprisingly, these animals spend"},{Start:111916,End:113875,Text:" most of their lives in the trees."},{Start:114125,End:116208,Text:" They are highly intelligent creatures"},{Start:116208,End:117833,Text:" and even use tools."},{Start:117958,End:119958,Text:" They use large leaves for umbrellas"},{Start:119958,End:121083,Text:" when it rains"},{Start:121083,End:123541,Text:" and sticks to get honey from beehives."},{Start:123916,End:126708,Text:" They eat mainly fruit and their favorite"},{Start:126708,End:129124,Text:" is a spiky fruit called durian,"},{Start:129124,End:132583,Text:" which tastes nice but has a very strong smell."},{Start:133041,End:136333,Text:" Another resident of Borneo famous for its smell"},{Start:136333,End:138625,Text:" is a flower called Rafflesia."},{Start:138916,End:141166,Text:" It is the largest flower in the world"},{Start:141166,End:143791,Text:" and can grow to over three feet across."},{Start:144166,End:147708,Text:" However, its smell is not pleasant at all"},{Start:147708,End:150416,Text:" and is described as being like rotting meat."},{Start:150708,End:152750,Text:" It attracts lots of flies, though,"},{Start:152750,End:155041,Text:" which is the purpose of the smell."},{Start:156041,End:158250,Text:" Half of the world's tropical timber wood "},{Start:158250,End:159500,Text:" comes from Borneo."},{Start:159708,End:163666,Text:" In 1975 about 75% of the island "},{Start:163666,End:165125,Text:" was covered in forest."},{Start:165333,End:168958,Text:" In 2005 that had dropped to 50% "},{Start:168958,End:170916,Text:" because of deforestation."},{Start:171625,End:174041,Text:" The future of Borneo is uncertain,"},{Start:174041,End:176750,Text:" but luckily environmental organizations "},{Start:176750,End:179083,Text:" are working hard to protect the island "},{Start:179083,End:181083,Text:" and its amazing forests."}]},
{id:4,SubsArray : [{Start:9625,End:12083,Text:"Recent research on fatal injuries"},{Start:12083,End:14375,Text:"in the workplace in the USA "},{Start:14791,End:18125,Text:"gives us an idea of the most dangerous jobs."},{Start:18541,End:20666,Text:"Here are the top five. "},{Start:21833,End:24250,Text:"At number five is structural iron "},{Start:24250,End:25708,Text:"and steel workers."},{Start:26125,End:28250,Text:"These guys work with heavy materials"},{Start:28250,End:29791,Text:"and dangerous equipment."},{Start:30708,End:34041,Text:"They also have to work in all kinds of weather. "},{Start:34833,End:37041,Text:"But their main risk is heights."},{Start:39083,End:40791,Text:"They are the ones who get up there "},{Start:40791,End:43666,Text:"and secure the main structure of a building,"},{Start:44166,End:48333,Text:"and as buildings get taller, the risks get higher. "},{Start:49208,End:51750,Text:"They have all sorts of safety equipment, "},{Start:52541,End:56583,Text:"but still, about 37 out of 100,000 workers"},{Start:56708,End:59166,Text:"lose their lives every year."},{Start:60416,End:63583,Text:"Number four on the list is the job of a roofer. "},{Start:64166,End:66250,Text:"As with steel and iron workers, "},{Start:66375,End:69250,Text:"roofers have to deal with rain, wind,"},{Start:69250,End:70833,Text:" snow and ice."},{Start:71458,End:74250,Text:"And the fact that they work high up all day long "},{Start:74250,End:76916,Text:"is what makes this job so dangerous. "},{Start:77666,End:79208,Text:"However, recent regulations"},{Start:79208,End:80250,Text:"have made this job "},{Start:80250,End:82416,Text:"much safer than it was in the past."},{Start:83041,End:84666,Text:"But still, with around 40 workers"},{Start:84666,End:88833,Text:"losing their lives out of 100,000 every year, "},{Start:89291,End:91000,Text:"this is not the sort of job"},{Start:91000,End:92833,Text:"people ought to choose lightly."},{Start:95958,End:98125,Text:"Number three on the list is pilots,"},{Start:98375,End:100666,Text:"which may surprise some people. "},{Start:101250,End:103916,Text:"Well, pilots who work for major airlines"},{Start:103916,End:106583,Text:"actually have quite a safe occupation. "},{Start:107125,End:110458,Text:"However, there are many pilots of small planes, "},{Start:110458,End:111375,Text:"charter airlines"},{Start:111375,End:115208,Text:"and taxi pilots whose job has a lot more risks. "},{Start:116083,End:119250,Text:"About 53 out of 100,000 pilots"},{Start:119250,End:121250,Text:"lose their lives every year "},{Start:121750,End:124375,Text:"and the main cause is bad weather. "},{Start:125125,End:127208,Text:"Fortunately, better weather information"},{Start:127208,End:128749,Text:"and improved technology "},{Start:128749,End:130958,Text:"is helping to reduce this number."},{Start:133166,End:134083,Text:"At number 2 "},{Start:134083,End:136750,Text:"is people working in the fishing industry. "},{Start:137500,End:139875,Text:"Dealing with heavy machinery in bad weather"},{Start:139875,End:141166,Text:"is difficult for anyone,"},{Start:141708,End:143708,Text:"but when you have huge waves "},{Start:143708,End:146375,Text:"crashing over the boat at the same time,"},{Start:146375,End:148541,Text:"it becomes a nightmare. "},{Start:149291,End:151125,Text:"About half the deaths of fishermen"},{Start:151125,End:153041,Text:"are caused by boats overturning "},{Start:153041,End:154791,Text:"or sinking during storms. "},{Start:155750,End:158083,Text:"The weather and their location in the ocean "},{Start:158291,End:159875,Text:"make it almost impossible "},{Start:159875,End:162333,Text:"for rescue teams to do their job. "},{Start:162875,End:164208,Text:"Not surprisingly, "},{Start:164208,End:168500,Text:"about 117 fishermen out of every 100,000"},{Start:168500,End:170500,Text:"lose their lives every year. "},{Start:172416,End:174541,Text:"At the top of the list is loggers "},{Start:174791,End:177666,Text:"with approximately 127 workers "},{Start:177666,End:181208,Text:"losing their lives out of 100,000 every year. "},{Start:182208,End:184250,Text:"As with most dangerous jobs, "},{Start:184250,End:186041,Text:"logging requires working "},{Start:186041,End:187625,Text:"in all weather conditions. "},{Start:188291,End:190041,Text:"But they have the additional hazard"},{Start:190041,End:192916,Text:"of falling trees and dangerous equipment. "},{Start:193625,End:194666,Text:"In recent years "},{Start:194666,End:196791,Text:"there has been a growing need for housing, "},{Start:197291,End:199541,Text:"so many new inexperienced workers"},{Start:199541,End:200708,Text:"are starting out,"},{Start:201250,End:204666,Text:"and the first year is always the most dangerous. "},{Start:205791,End:207375,Text:"Companies are encouraged "},{Start:207375,End:208875,Text:"to use logging machinery,"},{Start:209166,End:210875,Text:"which helps reduce the risks. "},{Start:211583,End:213083,Text:"But that still doesn’t stop it "},{Start:213083,End:215500,Text:"from being the most dangerous job."}]},
{id:5,SubsArray : [{Start:13708,End:15958,Text:" Early European explorers to Africa"},{Start:15958,End:17708,Text:"were surprised to find that,"},{Start:17708,End:19041,Text:"more often than not,"},{Start:19041,End:21625,Text:" the villages they visited were expecting them."},{Start:22125,End:24250,Text:"This was because the people of different villages"},{Start:24250,End:27083,Text:" sent messages to each other using drums,"},{Start:27083,End:28375,Text:" and these messages traveled "},{Start:28375,End:30625,Text:" faster than the explorers."},{Start:31208,End:32499,Text:"The drum is an ancient "},{Start:32499,End:34500,Text:"form of telecommunication "},{Start:34500,End:36500,Text:"and messages sent this way can travel"},{Start:36500,End:39166,Text:" up to 100 miles per hour."},{Start:39958,End:42208,Text:" Another early form of telecommunication "},{Start:42208,End:43666,Text:" was smoke signals."},{Start:44125,End:45541,Text:" Smoke signals were often "},{Start:45541,End:47083,Text:"used to warn of danger"},{Start:47083,End:49333,Text:" or to tell people to gather somewhere."},{Start:49666,End:52041,Text:" In ancient China people sent messages "},{Start:52041,End:53333,Text:" along the Great Wall "},{Start:53333,End:56083,Text:" up to half a mile away using smoke signals."},{Start:56458,End:58583,Text:" In this way, information could travel"},{Start:58583,End:61833,Text:" 470 miles in just a few hours."},{Start:62250,End:63416,Text:" Native North Americans,"},{Start:63416,End:66250,Text:"also used smoke signals to great effect."},{Start:66750,End:68458,Text:" They put wet grass on a fire "},{Start:68458,End:70000,Text:"to create a lot of smoke"},{Start:70000,End:71583,Text:" and then controlled the clouds"},{Start:71583,End:73208,Text:"to create messages."},{Start:73500,End:76083,Text:" Each tribe had its own signaling system"},{Start:76083,End:78250,Text:" and the position of the fire on the hill played"},{Start:78250,End:80625,Text:" an important role in the message."},{Start:82583,End:84125,Text:" People have been using pigeons "},{Start:84125,End:86208,Text:"to send messages for thousands of years"},{Start:86208,End:88791,Text:" by attaching messages to their legs."},{Start:89125,End:90666,Text:" The first people to train pigeons"},{Start:90666,End:93916,Text:" were the ancient Persians 3,000 years ago."},{Start:94208,End:95708,Text:" The ancient Greeks used pigeons"},{Start:95708,End:97375,Text:"to send the names of Olympic winners"},{Start:97375,End:99416,Text:"to other cities."},{Start:99416,End:102708,Text:"During WWI and WWII, pigeons were used "},{Start:102708,End:104625,Text:" to send important information, "},{Start:104625,End:107333,Text:" and some pigeons even received medals."},{Start:107625,End:108958,Text:" Some places in India "},{Start:108958,End:113041,Text:" had a “pigeon post” service right up until 2004."},{Start:114375,End:116500,Text:" Telecommunication improved dramatically "},{Start:116500,End:118916,Text:" with the introduction of electricity."},{Start:119208,End:120750,Text:" Electrical signals could be sent "},{Start:120750,End:123041,Text:" and received using a telegraph."},{Start:123625,End:126208,Text:" The first telegram was sent by Samuel Morse "},{Start:126208,End:129083,Text:" on January 11th, 1838."},{Start:129291,End:130541,Text:" The message was sent over "},{Start:130541,End:133250,Text:"a distance of 2 miles with his Morse code"},{Start:133250,End:136541,Text:"which uses dots and dashes to represent letters."},{Start:136916,End:139333,Text:" Morse code is still used today, "},{Start:139333,End:142041,Text:" probably most famously when signaling for help"},{Start:142041,End:143750,Text:"through SOS "},{Start:144250,End:148041,Text:" . . . _ _ _ . . ."},{Start:149541,End:151208,Text:" Today, telecommunication "},{Start:151208,End:152958,Text:"is completely different."},{Start:153458,End:154916,Text:" Huge amounts of information "},{Start:154916,End:157416,Text:" travel all over the world every second,"},{Start:157416,End:160208,Text:" using satellites, wireless technology, "},{Start:160208,End:163833,Text:"cell phones, the Internet, etc. and who knows "},{Start:163833,End:165750,Text:" what the future will hold? "},{Start:165750,End:166916,Text:" It's amazing to think "},{Start:166916,End:169416,Text:" that it all started from the beat of a drum."}]},
{id:6,SubsArray : [{Start:9625,End:10875,Text:"The hot-air balloon"},{Start:10875,End:12875,Text:"is the oldest means of transport "},{Start:12875,End:16500,Text:"used to successfully fly while carrying humans. "},{Start:17500,End:19833,Text:"The earliest unmanned hot-air balloons "},{Start:19833,End:24083,Text:"were used in China about 1,800 years ago. "},{Start:25041,End:27791,Text:"Kongming lanterns were originally used"},{Start:27791,End:29125,Text:" for sending signals, "},{Start:29625,End:31625,Text:"but today you can see them "},{Start:31625,End:33041,Text:"in traditional festivals. "},{Start:33791,End:36000,Text:"They use the same basic technology"},{Start:36000,End:37625,Text:"as modern hot-air balloons; "},{Start:38375,End:41416,Text:"a light container which rises from the ground "},{Start:41416,End:43583,Text:"as it is filled with heated air."},{Start:45166,End:48125,Text:"The first true hot-air balloon was created "},{Start:48125,End:49583,Text:"by Joseph-Michel "},{Start:49583,End:51458,Text:"and Jacques-Étienne Montgolfier. "},{Start:52000,End:54166,Text:"The two brothers demonstrated their invention"},{Start:54166,End:58500,Text:"to the public in Paris, on 4th June, 1783. "},{Start:59375,End:61333,Text:"The flight lasted ten minutes "},{Start:61750,End:63625,Text:"but there were no passengers. "},{Start:64791,End:69291,Text:"The first flight carrying animals was on  19th September. "},{Start:70041,End:73416,Text:"A month later the first human flight took place "},{Start:73416,End:75250,Text:"and history was made."},{Start:76708,End:78083,Text:"The modern hot-air balloon "},{Start:78083,End:79541,Text:"commonly seen nowadays"},{Start:79541,End:81583,Text:"was developed in the 1950s. "},{Start:82166,End:84041,Text:"A typical hot-air balloon consists "},{Start:84041,End:86791,Text:"of a large balloon made of nylon "},{Start:86791,End:88333,Text:"with a hole at the bottom. "},{Start:89125,End:91291,Text:"Under the balloon there is a basket "},{Start:91291,End:94000,Text:"which can carry up to 16 people "},{Start:94000,End:96166,Text:"depending on the size of the balloon, "},{Start:96583,End:99791,Text:"but the most common can carry 3-5 people. "},{Start:100750,End:104125,Text:"Above the basket is an onboard source of heat, "},{Start:104333,End:107583,Text:"usually a burner containing liquid propane gas."},{Start:109416,End:112458,Text:"Hot-air balloons can fly to incredible heights. "},{Start:113291,End:116041,Text:"The current record for a hot-air balloon flight "},{Start:116041,End:119583,Text:"is 68,986 feet "},{Start:119958,End:122708,Text:"set by a 67-year-old man from India "},{Start:122708,End:124916,Text:"called Vijaypat Singhania. "},{Start:126541,End:129208,Text:"The first non-stop trip around the world"},{Start:129208,End:132541,Text:"in a hot-air balloon took place in 1999. "},{Start:133291,End:135375,Text:"The team of Bertrand Piccard"},{Start:135375,End:137083,Text:"and Brian Jones "},{Start:137083,End:139833,Text:"left Switzerland on 1st March, "},{Start:140458,End:141708,Text:"circled the globe "},{Start:141708,End:143875,Text:"and landed in the Egyptian desert"},{Start:143875,End:146333,Text:"300 miles south of Cairo,"},{Start:146333,End:149500,Text:"19 days and 21 hours later. "},{Start:150166,End:152666,Text:"They also set the record for the longest flight "},{Start:152666,End:154291,Text:"in a hot-air balloon."},{Start:155458,End:156500,Text:"For a safe flight,"},{Start:156833,End:159250,Text:"a pilot must know the weather forecast "},{Start:159250,End:160166,Text:"very well. "},{Start:160833,End:163208,Text:"This includes upper wind forecasts. "},{Start:164291,End:166708,Text:"It is most common to see hot-air balloons"},{Start:166708,End:168791,Text:"early in the morning or in the evening. "},{Start:169541,End:171416,Text:"This is because the winds at this time "},{Start:171416,End:173333,Text:"are usually at their calmest. "},{Start:174375,End:178041,Text:"The only control pilots have over the balloon"},{Start:178041,End:180000,Text:"is to go up or down. "},{Start:180750,End:181375,Text:"For this reason, "},{Start:181375,End:183708,Text:"they need to have a very good knowledge of"},{Start:183708,End:184625,Text:"which way the wind "},{Start:184625,End:186958,Text:"is travelling at different heights. "},{Start:187666,End:190208,Text:"Pilots pay close attention to clues "},{Start:190208,End:192750,Text:"such as flags or rising smoke. "},{Start:194791,End:196416,Text:"There are many balloon festivals "},{Start:196416,End:197208,Text:"around the world,"},{Start:197833,End:200125,Text:"but the largest takes place every October"},{Start:200125,End:202500,Text:"in Albuquerque, New Mexico. "},{Start:203416,End:205375,Text:"The event lasts nine days "},{Start:205958,End:209791,Text:"and over 500 balloons of all shapes and sizes "},{Start:209791,End:210666,Text:"take part."},{Start:211333,End:213708,Text:"Visitors can see balloon animals, "},{Start:214125,End:216541,Text:"buildings and many other different kinds "},{Start:216541,End:218458,Text:"of interesting characters."}]},
{id:7,SubsArray : [{Start:10666,End:16166,Text:"The Nile is 4,258 miles long and is believed to be"},{Start:16166,End:18250,Text:"the longest river in the world."},{Start:18625,End:21500,Text:"It flows through eleven countries:"},{Start:21500,End:26041,Text:"Tanzania, Uganda, Rwanda, Burundi,"},{Start:26041,End:29208,Text:"Democratic Republic of the Congo, Kenya, "},{Start:29208,End:35583,Text:"Ethiopia, Eritrea, South Sudan, Sudan and Egypt,"},{Start:35583,End:37958,Text:"where it empties into the Mediterranean."},{Start:38166,End:40708,Text:"In the south there are two rivers,"},{Start:40708,End:43166,Text:"the White Nile and the Blue Nile"},{Start:43166,End:45458,Text:"that join at the city of Khartoum."},{Start:45833,End:48416,Text:"The White Nile is longer and is used"},{Start:48416,End:51208,Text:"when defining the length of the Nile as a whole."},{Start:51583,End:53208,Text:"In the northern countries,"},{Start:53208,End:55250,Text:"the Nile flows through deserts,"},{Start:55250,End:57583,Text:"where it is the main source of water."},{Start:58041,End:60375,Text:"The ancient Egyptians depended on the Nile"},{Start:60375,End:62000,Text:"to build their civilization."},{Start:62375,End:63500,Text:"For thousands of years "},{Start:63500,End:65458,Text:"the river provided rich soil"},{Start:65458,End:67708,Text:"which was perfect for growing crops."},{Start:68625,End:72041,Text:"The Nile also provided fish and was a useful way"},{Start:72041,End:74500,Text:"to travel up and down the country."},{Start:74500,End:77041,Text:"Along the river grows the papyrus plant,"},{Start:77041,End:79625,Text:"which the ancient Egyptians used to create"},{Start:79625,End:81833,Text:"one of the first writing materials."},{Start:82208,End:84625,Text:"Nearly all the cultural and historical sites "},{Start:84625,End:88125,Text:"of ancient Egypt are situated along the Nile,"},{Start:88125,End:90083,Text:"including the Great Pyramids."},{Start:90708,End:92458,Text:"The stones to build the pyramids"},{Start:92458,End:93708,Text:"were brought along the river "},{Start:93708,End:95625,Text:"on boats from Aswan."},{Start:96458,End:99250,Text:"In the 19th century, very little was known"},{Start:99250,End:101041,Text:"about the source of the Nile."},{Start:101291,End:104166,Text:"Many explorers went on dangerous expeditions"},{Start:104166,End:107458,Text:"deep into the African jungle to find the source."},{Start:107833,End:109791,Text:"John Hanning Speke had heard"},{Start:109791,End:111000,Text:"tales of large lakes"},{Start:111000,End:112666,Text:"reported to be the source."},{Start:113000,End:116833,Text:"In 1856 he became the first European to visit "},{Start:116833,End:119166,Text:"Lake Victoria, the second largest "},{Start:119166,End:120625,Text:"lake in the world,"},{Start:120625,End:122625,Text:"and he named it after the Queen."},{Start:123291,End:125375,Text:"He believed it to be the source,"},{Start:125375,End:127291,Text:"and it certainly provides the Nile with "},{Start:127291,End:130083,Text:"most of its water, but the true source"},{Start:130083,End:132625,Text:"is now considered to be further south."},{Start:133208,End:136500,Text:"Today, the Nile is still an important river."},{Start:136750,End:138041,Text:"The area where the river "},{Start:138041,End:139500,Text:"meets the Mediterranean"},{Start:139500,End:141416,Text:"is called the Nile Delta,"},{Start:141416,End:143375,Text:"and it is green and fertile."},{Start:143583,End:147250,Text:"It covers about 150 miles of the coastline"},{Start:147250,End:150250,Text:"and half of the population of Egypt lives there."},{Start:150458,End:153541,Text:"Traditionally, the Nile flooded every year,"},{Start:153541,End:156375,Text:"providing essential soil for good farming."},{Start:156500,End:158708,Text:"However, some years, there would be"},{Start:158708,End:161333,Text:"too much flooding which destroyed crops,"},{Start:161333,End:163708,Text:"and other years there would be no flooding"},{Start:163708,End:165458,Text:"and no crops would grow."},{Start:165958,End:169541,Text:"In 1970, the Aswan dam was completed,"},{Start:169541,End:171375,Text:"helping to control water levels "},{Start:171375,End:173416,Text:"and the amount of water flow."}]},
{id:8,SubsArray : [{Start:9708,End:12208,Text:"Traditionally, a vegetarian diet"},{Start:12208,End:14750,Text:"involves avoiding eating any meat. "},{Start:15625,End:18333,Text:"The earliest records of vegetarian diets "},{Start:18333,End:20500,Text:"come from India and ancient Greece. "},{Start:21500,End:23625,Text:"The idea behind the Indian diet "},{Start:24166,End:27041,Text:"was to avoid any violence towards animals."},{Start:28041,End:30875,Text:"Ancient Greeks had a similar philosophy, "},{Start:31500,End:32916,Text:"but it was also considered "},{Start:32916,End:35791,Text:"a way of keeping the body clean and pure. "},{Start:36791,End:39375,Text:"Nowadays there are many kinds of vegetarians "},{Start:39791,End:41333,Text:"and sometimes it’s difficult "},{Start:41333,End:42250,Text:"to keep up with them."},{Start:44291,End:47000,Text:"An ovo-lacto vegetarian is someone "},{Start:47000,End:49208,Text:"who doesn’t eat meat of any kind, "},{Start:49708,End:51750,Text:"but eats dairy products and eggs."},{Start:52541,End:54916,Text:"The term comes from the Latin'ovum', "},{Start:55125,End:56250,Text:"which means egg, "},{Start:56875,End:59041,Text:"and 'lac', which means milk."},{Start:60250,End:61583,Text:"In the western world "},{Start:61583,End:64124,Text:"this is the most common kind of vegetarian, "},{Start:64749,End:66250,Text:"and more often than not "},{Start:66250,End:68416,Text:"when someone says vegetarian,"},{Start:68416,End:71250,Text:"they mean ovo-lacto vegetarian. "},{Start:72250,End:74833,Text:"There is a huge amount of food in supermarkets "},{Start:74833,End:76958,Text:"and restaurants which is suitable "},{Start:76958,End:78791,Text:"for ovo-lacto vegetarians."},{Start:80166,End:82291,Text:"A pescetarian is someone whose diet "},{Start:82291,End:84583,Text:"includes fish and seafood, "},{Start:84583,End:85916,Text:"but no other meat. "},{Start:86791,End:89500,Text:"A pescetarian is not technically a vegetarian, "},{Start:89833,End:92708,Text:"and this diet is often used as a stepping stone "},{Start:92708,End:93958,Text:"for people who eventually "},{Start:93958,End:96125,Text:"plan to become vegetarians. "},{Start:97416,End:101541,Text:"A pescetarian diet is full of Omega-3 fatty acids, "},{Start:101541,End:103666,Text:"which is necessary for good health. "},{Start:104916,End:107208,Text:"Pescetarianism is a new term"},{Start:107208,End:109916,Text:"which first appeared in 1993. "},{Start:110708,End:113000,Text:"Many pescetarians, like vegetarians,"},{Start:113333,End:115333,Text:"believe it is wrong to eat meat,"},{Start:115875,End:116958,Text:"although they don’t believe that "},{Start:116958,End:120291,Text:"killing fish is as bad as killing other animals. "},{Start:121375,End:124000,Text:"A similar diet is followed by pollotarians, "},{Start:124541,End:125625,Text:"but instead of fish,"},{Start:125875,End:128333,Text:"the only meat they eat is chicken."},{Start:129458,End:130916,Text:"A vegan is someone "},{Start:130916,End:132958,Text:"who doesn’t use animal products "},{Start:132958,End:134166,Text:"in any form. "},{Start:134958,End:137041,Text:"This means they don’t eat meat,"},{Start:137041,End:138333,Text:"or dairy products "},{Start:138333,End:140541,Text:"and in some cases products like honey."},{Start:141625,End:144625,Text:"Some ethical vegans also avoid wearing clothes"},{Start:144625,End:146250,Text:"that are made from animal products, "},{Start:146250,End:148458,Text:"like leather, wool and even silk. "},{Start:149666,End:152458,Text:"Raw vegans have an even stricter diet "},{Start:152916,End:154375,Text:"and don’t eat cooked meals. "},{Start:155458,End:157708,Text:"They believe that cooking food destroys "},{Start:157708,End:160333,Text:"the balance of nutrients that food has."},{Start:161333,End:164166,Text:"A vegan diet is believed to be too extreme "},{Start:164583,End:167583,Text:"because vegans miss out on important nutrients. "},{Start:168500,End:169041,Text:"However, "},{Start:169041,End:171333,Text:"as long as they are careful with their diet, "},{Start:171333,End:172625,Text:"there is no evidence that "},{Start:172625,End:175583,Text:"vegans are unhealthier than other vegetarians, "},{Start:176000,End:177958,Text:"and in fact, they even enjoy"},{Start:177958,End:179833,Text:"less risk of developing heart disease."},{Start:181250,End:183083,Text:"A flexitarian is someone "},{Start:183083,End:185125,Text:"who is basically a vegetarian, "},{Start:185125,End:186833,Text:"but occasionally eats meat. "},{Start:187791,End:190208,Text:"Generally, people are eating less meat, "},{Start:190541,End:192041,Text:"and the main reason for this"},{Start:192041,End:193750,Text:"is because they are becoming"},{Start:193750,End:196041,Text:"increasingly aware of the negative impact "},{Start:196041,End:198416,Text:"meat production has on the environment. "},{Start:199708,End:200333,Text:"For example,"},{Start:200333,End:203000,Text:"70% of the Amazon rainforest "},{Start:203000,End:204500,Text:"has been destroyed "},{Start:204500,End:206333,Text:"to make way for cattle farms. "},{Start:207458,End:208958,Text:"Apart from the health benefits,"},{Start:209333,End:210750,Text:"and perhaps more importantly, "},{Start:211375,End:214083,Text:"being a vegetarian is good for the planet."},{Start:214875,End:215750,Text:"And anyway, "},{Start:216333,End:218083,Text:"you don’t have to be a vegetarian "},{Start:218083,End:219666,Text:"to love vegetarian food."}]},
{id:9,SubsArray : [{Start:11666,End:14041,Text:" The idea of trading one thing for another "},{Start:14041,End:15166,Text:"is very old."},{Start:15750,End:17458,Text:" In the beginning people exchanged"},{Start:17458,End:18541,Text:" whatever they had."},{Start:19000,End:20583,Text:" One person who had a lot of cows "},{Start:20583,End:22166,Text:"would exchange with someone else"},{Start:22166,End:23708,Text:"who had a lot of corn."},{Start:24083,End:25791,Text:" This is known as bartering."},{Start:26541,End:28708,Text:" After a while, people discovered this was"},{Start:28708,End:30375,Text:" an inconvenient system, "},{Start:30375,End:32166,Text:" so they began replacing these goods "},{Start:32166,End:35208,Text:" with smaller valuable items, like jewelry,"},{Start:35208,End:37500,Text:" spices or precious metals. "},{Start:39125,End:43041,Text:" About 2,600 years ago, a country called Lydia"},{Start:43041,End:44625,Text:"existed which was situated "},{Start:44625,End:47125,Text:"in the western part of what is now Turkey."},{Start:47750,End:50250,Text:" Here, they used small round pieces of"},{Start:50250,End:52708,Text:" precious metal stamped with a lion on it."},{Start:53166,End:55708,Text:" These are considered to be the first coins"},{Start:55708,End:57875,Text:" and there were many benefits to using them."},{Start:58458,End:60250,Text:" They were easy to carry around, and"},{Start:60250,End:61791,Text:" much easier to use."},{Start:62250,End:65083,Text:" With coins people could buy even half a cow's"},{Start:65083,End:67000,Text:" worth of corn, for example. "},{Start:67333,End:69500,Text:" Money is easier to count than to add up"},{Start:69500,End:72250,Text:" the value of different cows or amounts of corn "},{Start:72750,End:75541,Text:" Also, cows die and corn rots,"},{Start:75541,End:77708,Text:" but money lasts much longer."},{Start:78916,End:80291,Text:" After coins had been used "},{Start:80291,End:81708,Text:"for hundreds of years,"},{Start:81708,End:82791,Text:" people started writing "},{Start:82791,End:84125,Text:"how many coins they owed"},{Start:84125,End:86500,Text:" to another person on pieces of paper,"},{Start:86500,End:87958,Text:"as a kind of receipt."},{Start:88375,End:90458,Text:" These pieces of paper replaced coins"},{Start:90458,End:92708,Text:" and became money in their own right."},{Start:93166,End:95500,Text:" This was the origin of paper money."},{Start:95791,End:97708,Text:" The first country to use paper money was"},{Start:97708,End:99666,Text:" China in the 7th century."},{Start:100000,End:102291,Text:" Paper money came to Europe much later,"},{Start:102291,End:103791,Text:" in the 13th century,"},{Start:103791,End:105875,Text:" thanks to travelers returning from China"},{Start:105875,End:107375,Text:" such as Marco Polo."},{Start:107750,End:109791,Text:" The first banknotes were printed in Sweden"},{Start:109791,End:113625,Text:" in 1660, but four years later banks ran out"},{Start:113625,End:115291,Text:" of coins to replace them with,"},{Start:115291,End:118083,Text:" and they stopped using banknotes altogether."},{Start:119291,End:122875,Text:" In 1949, Frank McNamara was dining at"},{Start:122875,End:125333,Text:" Major's Cabin Grill in New York,"},{Start:125333,End:127791,Text:" when he realized he had forgotten his wallet."},{Start:128291,End:130791,Text:" To avoid future embarrassment he came up"},{Start:130791,End:132833,Text:" with the idea of a card that could be used"},{Start:132833,End:134166,Text:" to pay for meals,"},{Start:134166,End:136250,Text:" and the credit card was born."},{Start:136625,End:139208,Text:" By 1952, the card was accepted"},{Start:139208,End:142541,Text:" at 400 restaurants and 30 hotels."},{Start:142875,End:145375,Text:" Today, about 10,000  credit card"},{Start:145375,End:147875,Text:" transactions are made every second."},{Start:148166,End:151083,Text:" In fact, you don't even need a card anymore."},{Start:151333,End:153541,Text:" With e-commerce you just need the number"},{Start:153541,End:155458,Text:" on your card to buy items online"},{Start:155458,End:157250,Text:" from anywhere in the world."},{Start:157708,End:158958,Text:" The average consumer spends"},{Start:158958,End:162541,Text:" about $1,300 a year online,"},{Start:162541,End:165333,Text:" a number which is rising all the time."}]},
{id:10,SubsArray : [{Start:9625,End:11875,Text:"There is a wide variety of sports "},{Start:11875,End:13291,Text:"involving boards "},{Start:13708,End:15125,Text:"and they all originate "},{Start:15125,End:17458,Text:"from ancient Polynesian culture."},{Start:18291,End:19333,Text:"For centuries, "},{Start:19333,End:20958,Text:"riding waves on a board "},{Start:21375,End:22541,Text:"was a popular pastime "},{Start:22541,End:23958,Text:"for the people of Polynesia. "},{Start:24958,End:27625,Text:"The first European to write about people surfing "},{Start:27625,End:29166,Text:"was James King, "},{Start:29750,End:34083,Text:"a crew member of the HMS Endeavour in 1779."},{Start:34916,End:35833,Text:"He witnessed the pastime "},{Start:35833,End:37583,Text:"while travelling to Hawaii "},{Start:37875,End:40375,Text:"under the command of captain James Cook. "},{Start:41416,End:44875,Text:"Later, in 1907, a man from Honolulu "},{Start:44875,End:47916,Text:"called George Freeth moved to California "},{Start:48333,End:50916,Text:"and helped to make surfing a popular sport."},{Start:52000,End:52958,Text:"He is commonly known "},{Start:52958,End:55083,Text:"as the 'father of modern surfing.' "},{Start:56291,End:57541,Text:"The first person to consider "},{Start:57541,End:59375,Text:"adding a sail to a board "},{Start:59375,End:60625,Text:"was a 20-year-old "},{Start:60625,End:63416,Text:"from Pennsylvania called Newman Darby."},{Start:64291,End:66541,Text:"Darby made many different versions"},{Start:66541,End:68083,Text:"up until the 1960s"},{Start:68666,End:72791,Text:"and in 1964 he began selling his sailboards."},{Start:73541,End:75583,Text:"Windsurfing became very popular "},{Start:76125,End:79291,Text:"and by 1984 it was an Olympic sport. "},{Start:80208,End:82291,Text:"Some windsurfers replaced the sail "},{Start:82291,End:83375,Text:"with a power kite, "},{Start:83750,End:86791,Text:"and a new sport was invented, kitesurfing. "},{Start:87416,End:88583,Text:"It became clear that "},{Start:88583,End:90583,Text:"many different kinds of sports "},{Start:90583,End:92666,Text:"could be invented using a board, "},{Start:93041,End:94750,Text:"and not only on water. "},{Start:95833,End:97458,Text:"In the early 1950s, "},{Start:97458,End:100541,Text:"surfers in California wanted something to do "},{Start:100541,End:102500,Text:"when the waves weren’t suitable."},{Start:103125,End:106000,Text:"The answer was to put some wheels on a board, "},{Start:106291,End:108541,Text:"and skateboarding was born. "},{Start:109166,End:109833,Text:"In the beginning,"},{Start:109833,End:112375,Text:"it was known as 'sidewalk surfing' "},{Start:112833,End:115416,Text:"and skaters copied the moves of surfers "},{Start:115416,End:116833,Text:"and skated barefoot."},{Start:117875,End:119750,Text:"Skateboarding quickly took off"},{Start:120083,End:122750,Text:"and a huge number of tricks were invented. "},{Start:124208,End:126875,Text:"Today, there are lots of different boards "},{Start:126875,End:128083,Text:"like the longboard,"},{Start:128374,End:130291,Text:"which is used for sliding tricks "},{Start:130291,End:131916,Text:"and downhill racing."},{Start:133250,End:135666,Text:"Inspired by surfing and skateboarding, "},{Start:136041,End:139083,Text:"skiers decided to try using a board on snow, "},{Start:139375,End:143333,Text:"and yet another sport was born, snowboarding. "},{Start:144166,End:145708,Text:"Over the years snowboarding "},{Start:145708,End:147500,Text:"has become very popular"},{Start:147500,End:150750,Text:"and today snowboarders make up about 30% "},{Start:150750,End:153000,Text:"of all snow sports participants. "},{Start:154458,End:156791,Text:"It became an Olympic sport for the first time "},{Start:156791,End:160833,Text:"at the 1998 Winter Olympics in Nagano, Japan."},{Start:162375,End:164958,Text:"After water, land and snow, "},{Start:165166,End:168208,Text:"the only natural place for boardsports to go"},{Start:168208,End:169250,Text:" was the sky. "},{Start:170250,End:173125,Text:"The boards used for skysurfing are smaller "},{Start:173125,End:176083,Text:"than surfboards and look more like snowboards. "},{Start:177041,End:179875,Text:"Skysurfing is more difficult than it looks, "},{Start:180208,End:181791,Text:"and keeping your balance "},{Start:181791,End:183458,Text:"during even simple moves "},{Start:183458,End:184875,Text:"needs a lot of skill. "},{Start:185541,End:187250,Text:"But with a little practice, "},{Start:187458,End:189458,Text:"there is no end to the amount of tricks "},{Start:189458,End:190500,Text:"you can learn. "},{Start:190875,End:192791,Text:"The sky is the limit."}]},
{id:11,SubsArray : [{Start:10083,End:12000,Text:"The first telescopes were invented"},{Start:12000,End:14416,Text:"in the 17th century and,"},{Start:14416,End:16708,Text:" as they improved, astronomers were able"},{Start:16708,End:20541,Text:"to learn more and more about the stars at night."},{Start:20541,End:24416,Text:"In 1946, the astronomer Lyman Spitzer wrote"},{Start:24416,End:26583,Text:"a paper discussing the main advantages"},{Start:26583,End:29708,Text:"a telescope based in space would have over"},{Start:29708,End:31375,Text:"a telescope on the ground,"},{Start:31375,End:33166,Text:"and he spent much of his career"},{Start:33166,End:34958,Text:"trying to make it happen."},{Start:34958,End:37583,Text:"In the 1970s NASA began"},{Start:37583,End:40333,Text:"planning a space telescope and it was carried"},{Start:40333,End:42791,Text:"into orbit in 1990."},{Start:42791,End:45708,Text:" They named the telescope after Edwin Hubble,"},{Start:45708,End:47708,Text:"one of the most important astronomers"},{Start:47708,End:49166,Text:"of the 20th century."},{Start:50666,End:52291,Text:"The larger the telescope,"},{Start:52291,End:54375,Text:"the further away you can see. "},{Start:54375,End:57333,Text:"A telescope uses a mirror to collect light,"},{Start:57333,End:59375,Text:"and it is the size of this mirror"},{Start:59375,End:62375,Text:"which decides how far you can see."},{Start:62375,End:65458,Text:"NASA's space telescope was originally designed"},{Start:65458,End:67541,Text:"to have a 3-meter wide mirror,"},{Start:67541,End:71250,Text:"but that was reduced to 2.4 meters to save money."},{Start:71708,End:74208,Text:"The Hubble Space Telescope is the size"},{Start:74208,End:77416,Text:"of two buses and weighs 11 tonnes."},{Start:77416,End:80458,Text:"It gets all its power from two solar panels"},{Start:80458,End:83750,Text:"but it actually doesn't need a lot of power to run."},{Start:83750,End:86625,Text:"It uses about 2,800 watts,"},{Start:86625,End:88625,Text:"which is only about double the amount"},{Start:88625,End:90291,Text:"used by a coffee maker."},{Start:91708,End:94541,Text:"The Hubble Space Telescope is in orbit"},{Start:94541,End:96708,Text:"around the Earth, traveling at a speed"},{Start:96708,End:99416,Text:"of 17,000 miles  per hour."},{Start:99416,End:102750,Text:"The telescope uses electronic detectors,"},{Start:102750,End:104500,Text:"so basically it works just like"},{Start:104500,End:106583,Text:"a huge digital camera."},{Start:106583,End:108875,Text:"It can take pictures of stars and galaxies"},{Start:108875,End:111083,Text:"several billion light years away."},{Start:112000,End:114208,Text:"A light year is the distance light"},{Start:114208,End:115958,Text:"travels in one year."},{Start:116708,End:118750,Text:"The sun is the closest star to the"},{Start:118750,End:121541,Text:"telescope but it can't take pictures of it,"},{Start:121541,End:123708,Text:"because the sensors would break."},{Start:124375,End:127041,Text:"The Hubble Space Telescope has made some"},{Start:127041,End:129624,Text:"very important discoveries over the years and"},{Start:129624,End:132000,Text:"has contributed a lot to science."},{Start:132000,End:134500,Text:"However, it is probably most famous"},{Start:134500,End:136500,Text:"for taking pictures of nebulae."},{Start:137500,End:140041,Text:"A nebula is a cloud of dust,"},{Start:140041,End:142583,Text:"hydrogen and helium in space,"},{Start:142583,End:145750,Text:"and an image of one is often spectacular."},{Start:145750,End:148875,Text:"Sadly, the Hubble Space Telescope won't be able"},{Start:148875,End:150666,Text:"to stay in orbit forever."},{Start:150666,End:152583,Text:"Its parts will soon wear out and"},{Start:152583,End:155541,Text:"in the future it will fall from orbit and break up"},{Start:155541,End:157916,Text:" when entering the Earth's atmosphere."},{Start:157916,End:160708,Text:"However, NASA is already designing its"},{Start:160708,End:162333,Text:"next space telescope,"},{Start:162333,End:164666,Text:"called the James Webb Space Telescope,"},{Start:164666,End:167541,Text:"which will have a 6.5 meter mirror"},{Start:167541,End:169041,Text:"and will be able to see some"},{Start:169041,End:171541,Text:"of the most distant galaxies in our universe."}]},
{id:12,SubsArray : [{Start:9666,End:11625,Text:"Thomas Alva Edison"},{Start:11625,End:14875,Text:" was an American inventor and businessman "},{Start:14875,End:16625,Text:"who designed devices "},{Start:16625,End:19083,Text:"that greatly changed everyday life. "},{Start:19875,End:21875,Text:"He was born in 1847 "},{Start:22208,End:24958,Text:"and his formal education was very short. "},{Start:25500,End:27333,Text:"He only spent three months at school "},{Start:27333,End:29125,Text:"before his mother took him out "},{Start:29125,End:31500,Text:"because she didn’t like the way they treated him. "},{Start:32291,End:33416,Text:"She taught him at home"},{Start:33916,End:35541,Text:"and Edison often said "},{Start:35541,End:37458,Text:"that if his mother hadn’t taught him,"},{Start:37458,End:40333,Text:"he wouldn’t have been so successful in later life."},{Start:41375,End:43208,Text:"When Edison was 14, "},{Start:43458,End:46416,Text:"he saved a young child from a runaway train. "},{Start:47000,End:49166,Text:"The child’s father was so grateful "},{Start:49416,End:50333,Text:"he taught Edison "},{Start:50333,End:52250,Text:"how to use a telegraph machine. "},{Start:52958,End:54916,Text:"Eventually, Edison got a job"},{Start:54916,End:57708,Text:"as a telegraph operator at Western Union. "},{Start:58541,End:60500,Text:"He preferred to work the night shift "},{Start:60500,End:62125,Text:"as he liked to work on his experiments"},{Start:62125,End:64916,Text:"in his home-made laboratory during the day. "},{Start:65708,End:67875,Text:"He loved to take things apart, "},{Start:67875,End:71000,Text:"and soon he began to create things himself."},{Start:72083,End:75416,Text:"His first invention was the electric vote recorder, "},{Start:75416,End:76916,Text:"but it was a failure. "},{Start:77791,End:80208,Text:"After that, he moved to New York "},{Start:80208,End:82000,Text:"and improved the stock ticker "},{Start:82000,End:84333,Text:"and success started coming his way. "},{Start:85041,End:87583,Text:"A lot of Edison’s success was due to the fact "},{Start:87583,End:90583,Text:"that he was not only able to invent new things, "},{Start:90583,End:92916,Text:"but was able to take old inventions"},{Start:92916,End:94750,Text:"and make them more practical. "},{Start:95791,End:98291,Text:"A good example of this is the light bulb. "},{Start:99000,End:100208,Text:"Many people believe that "},{Start:100208,End:103416,Text:"the light bulb was invented by Edison, but actually,"},{Start:103416,End:107416,Text:"all Edison did was make previous designs work better."},{Start:108041,End:109291,Text:"More importantly, "},{Start:109291,End:112583,Text:"he designed a whole system of power and wiring "},{Start:112583,End:114375,Text:"that could be used in people’s homes."},{Start:115250,End:116500,Text:"This kind of thinking "},{Start:116500,End:119625,Text:"made Edison a very successful businessman."},{Start:120958,End:124416,Text:"In 1876, Edison moved to New Jersey "},{Start:124416,End:127458,Text:"where he built his famous lab, Menlo Park. "},{Start:128499,End:131250,Text:"Here, he invented many more devices,"},{Start:131250,End:134208,Text:"including the phonograph in 1877. "},{Start:135708,End:137916,Text:"Other inventors had produced machines "},{Start:137916,End:139291,Text:"that could record sound, "},{Start:139875,End:142250,Text:"but Edison’s device was the first "},{Start:142250,End:144958,Text:"to be able to reproduce sound as well."},{Start:146375,End:148666,Text:"However, what many people don’t know "},{Start:148916,End:151833,Text:"is that Edison was almost completely deaf. "},{Start:152625,End:154375,Text:"In order to hear the phonograph, "},{Start:154666,End:157375,Text:"he would bite into the wooden part of the machine "},{Start:157666,End:159583,Text:"and 'hear' the sound waves "},{Start:159583,End:161541,Text:"vibrating through his teeth."},{Start:162791,End:166166,Text:"In 1887 Edison expanded again "},{Start:166166,End:168666,Text:"and built a laboratory in West Orange, "},{Start:168666,End:171875,Text:"which was ten times as large as Menlo Park. "},{Start:172916,End:176250,Text:"This has been called the first industrial research lab "},{Start:176416,End:178791,Text:"and attracted scientists and engineers "},{Start:178791,End:181208,Text:"from all over the world to work with Edison. "},{Start:182750,End:187083,Text:"They helped him earn over half of his 1,093 patents "},{Start:187083,End:189125,Text:"while working at West Orange. "},{Start:190625,End:194166,Text:"Among other inventions, he also worked on X-rays,"},{Start:195208,End:198250,Text:"storage batteries and film making. "},{Start:199833,End:202375,Text:"Many people have called Edison a genius, "},{Start:203458,End:205750,Text:"but he knew more than anyone"},{Start:205750,End:208208,Text:"that having good ideas was not enough. "},{Start:209125,End:211500,Text:"For dreams to become reality, "},{Start:211500,End:214166,Text:"it also takes a lot of hard work."}]},
{id:13,SubsArray : [{Start:11250,End:12500,Text:"Welcome to Sunborn London."},{Start:12500,End:15708,Text:" It’s a 120-metre vessel, 136 bedrooms, "},{Start:15708,End:17083,Text:"including four suites. "},{Start:17083,End:19708,Text:"This ship is between eight to eleven years old "},{Start:19708,End:21916,Text:"and it was actually built as a hotel. "},{Start:21916,End:23916,Text:" So this means that it actually has no engine "},{Start:23916,End:25583,Text:"downstairs, "},{Start:25583,End:26875,Text:"which leaves a lot of space downstairs. "},{Start:26875,End:28000,Text:" She was based over in Finland "},{Start:28000,End:29000,Text:"for a number of years."},{Start:29000,End:30250,Text:"And then finally last week,"},{Start:30250,End:32458,Text:" she came to her final resting position"},{Start:32458,End:34416,Text:"in Queen Victoria Dock."},{Start:34416,End:35666,Text:"As opposed to a normal hotel,"},{Start:35666,End:37083,Text:" this boat is a little bit unique"},{Start:37083,End:38333,Text:" in that the majority of the rooms"},{Start:38333,End:39208,Text:"have beautiful balconies. "},{Start:39208,End:41083,Text:"Plus, we’ve got viewing public space"},{Start:41083,End:42750,Text:" at the front and the back of the hotel"},{Start:42750,End:45250,Text:"which allows you to watch Canary Wharf "},{Start:45250,End:46000,Text:" during the daytime. "},{Start:46000,End:47500,Text:" The backdrop, as you can see,"},{Start:47500,End:48125,Text:"is Canary Wharf,"},{Start:48125,End:49583,Text:" which illuminates at night-time, "},{Start:49583,End:52333,Text:" so it’s just a delight to be able to sit down here. "},{Start:52333,End:56000,Text:"And I’m working on an afternoon tea concept, "},{Start:56000,End:57958,Text:"which will be something like ‘Under the Sea’."},{Start:57958,End:58708,Text:" So at the moment,"},{Start:58708,End:59791,Text:" I’ve got some beautiful  "},{Start:59791,End:61458,Text:" hand-crafted afternoon tea stands"},{Start:61458,End:62000,Text:"being produced "},{Start:62000,End:63375,Text:"and we’re just working out the logistics"},{Start:63375,End:65416,Text:"of how we’re going to have some seahorse cookies "},{Start:65416,End:67333,Text:"and some blue cakes "},{Start:67333,End:68166,Text:"and all this kind of stuff."},{Start:68166,End:69083,Text:"So that’s a little bit exciting, "},{Start:69083,End:70333,Text:" a little bit of good fun at the moment."},{Start:70333,End:71000,Text:"The auditorium"},{Start:71000,End:72208,Text:"is probably my favourite room "},{Start:72208,End:74250,Text:"on the Sunborn yacht"},{Start:74250,End:75666,Text:"and I’m really not sure why."},{Start:75666,End:79125,Text:"It just has this wonderful feel about it. "},{Start:79125,End:82458,Text:" It’s essentially set up to seat about fifty people, "},{Start:82458,End:83541,Text:" so during the daytime,"},{Start:83541,End:84625,Text:"more or less Monday to Friday,"},{Start:84625,End:86000,Text:" it will be used as a conference room. "},{Start:86000,End:87041,Text:"And then in the evening time,"},{Start:87041,End:87833,Text:"which is quite exciting, "},{Start:87833,End:91500,Text:"we could create World Cup themed evenings, "},{Start:91500,End:92833,Text:"a movie night twice a week,"},{Start:92833,End:94166,Text:"or we can showcase some movies, "},{Start:94166,End:96083,Text:"some of the classics.  "},{Start:96083,End:98875,Text:"So yeah, so there’s just something almost "},{Start:98875,End:102125,Text:" eternally romantic about it which I really like."},{Start:102125,End:103208,Text:"The restaurant,"},{Start:103208,End:105041,Text:"which we’ve proudly named Land’s End restaurant. "},{Start:105041,End:105875,Text:"So as you can see,"},{Start:105875,End:107458,Text:" it’s quite a palatial space here. "},{Start:107458,End:108625,Text:"So we’re hoping that we’ll create "},{Start:108625,End:110166,Text:"a destination restaurant here "},{Start:110166,End:111708,Text:"with some beautiful cuisine and service."},{Start:111708,End:114833,Text:"At the moment, we’ve got 136 bedrooms."},{Start:114833,End:117083,Text:"We’ve got two luxury suites "},{Start:117083,End:117791,Text:" which we’ve got here."},{Start:117791,End:119250,Text:"We’ve got two junior suites. "},{Start:119250,End:121916,Text:"And then obviously we’ve got the rest of the rooms"},{Start:121916,End:123666,Text:" on the executive level."},{Start:123666,End:125833,Text:" So this is one of my other favourite rooms. "},{Start:125833,End:127291,Text:" I’ve got two. "},{Start:127291,End:129041,Text:" I should say the restaurant, but, you know, "},{Start:129041,End:130749,Text:" just from a hotel point of view."},{Start:130749,End:131958,Text:"So this is one of the luxury suites "},{Start:131958,End:134541,Text:"and we do have the outside decking space "},{Start:134541,End:135625,Text:"which is beautiful. "},{Start:135625,End:137333,Text:" Here, in the living-lounge room, "},{Start:137333,End:138791,Text:"we’ve got a beautiful dining table "},{Start:138791,End:139625,Text:" just over there"},{Start:139625,End:141083,Text:" and we’ve got a couple of other special features"},{Start:141083,End:143375,Text:" in the bathroom which I’d like to show you."},{Start:143375,End:147125,Text:" Here we are, in the glorious palatial bathroom"},{Start:147125,End:148375,Text:" of the luxury suite. "},{Start:148375,End:151333,Text:" So we’ve got the Jacuzzi bath"},{Start:151333,End:153208,Text:" and also something that’s a little bit special,"},{Start:153208,End:155041,Text:"we’ve got your own little sauna in here."},{Start:155041,End:155875,Text:"Thanks for joining me "},{Start:155875,End:158416,Text:"on the behind the scenes tour of Sunborn London."}]},
{id:14,SubsArray : [{Start:16083,End:18291,Text:"‘Mr Watson, come here.’ "},{Start:18291,End:21041,Text:" Supposedly the very first telephone call. "},{Start:21041,End:25333,Text:" It was made by Alexander Graham Bell in 1876, "},{Start:25333,End:26375,Text:" but the year before "},{Start:26375,End:28250,Text:"he made the crucial breakthrough, "},{Start:28250,End:30000,Text:" namely that you could transmit more"},{Start:30000,End:32791,Text:"than just a single note electromagnetically, "},{Start:32791,End:35291,Text:"you could transmit whole sounds."},{Start:35291,End:38750,Text:"And he did it using this gallows frame telephone – "},{Start:38750,End:42458,Text:"a vibrating reed against a diaphragm."},{Start:42458,End:44625,Text:" The telephone was born."},{Start:44625,End:47250,Text:" Up until as recently as the 1970s,"},{Start:47250,End:48791,Text:"telephone calls were connected"},{Start:48791,End:51375,Text:"by a copper wire from your house"},{Start:51375,End:52458,Text:"all the way "},{Start:52458,End:54666,Text:"to a local telephone exchange like this, "},{Start:54666,End:56958,Text:" manned by invariably women,"},{Start:56958,End:58958,Text:"who would connect your call "},{Start:58958,End:61333,Text:"into the socket of another household. "},{Start:61333,End:63625,Text:"Hey presto, you could chat."},{Start:63625,End:66166,Text:"But the post office believed correctly that people "},{Start:66166,End:68333,Text:"couldn’t remember long telephone numbers, "},{Start:68333,End:71541,Text:"so instead, everyone had a code. "},{Start:71541,End:72750,Text:" There were hundreds in London, "},{Start:72750,End:75791,Text:"and my one in north London was Canonbury"},{Start:75791,End:78625,Text:" – C-A-N."},{Start:78625,End:79833,Text:" And to this day,"},{Start:79833,End:83541,Text:"I still have 2-2-6 in my telephone number."},{Start:84041,End:85375,Text:"This can lay claim "},{Start:85375,End:87916,Text:"to being the very first mobile phone. "},{Start:87916,End:89541,Text:" It was used in the 1930s "},{Start:89541,End:91333,Text:"by a Brighton police station "},{Start:91333,End:93250,Text:" to speak to bobbies on the beat,"},{Start:93250,End:95125,Text:" though it was one way. "},{Start:95125,End:96958,Text:"If the policemen wanted to speak to the station "},{Start:96958,End:98833,Text:"they had to go and find a pay phone."},{Start:98833,End:100333,Text:" But hey, it was a start,"},{Start:100333,End:102958,Text:"and it led to this beauty, "},{Start:102958,End:106416,Text:"which is Britain’s very first mobile phone – "},{Start:106416,End:108041,Text:"not using radio waves,"},{Start:108041,End:110958,Text:"using an analogue cellular network,"},{Start:110958,End:114250,Text:" and it was launched in 1985. "},{Start:114250,End:116416,Text:"Maggie Thatcher liberalised the telephone market"},{Start:116416,End:118000,Text:"in the 1980s,"},{Start:118000,End:120708,Text:" and that allowed, for the first time, competition. "},{Start:120708,End:123000,Text:"And on the first of January 1985,"},{Start:123000,End:125375,Text:"Vodafone made the first call."},{Start:125375,End:129291,Text:" I particularly love this 1986 Excell model,"},{Start:129291,End:132625,Text:"designed for the first time to fit into a shirt pocket."},{Start:132625,End:133375,Text:"Don’t laugh. "},{Start:133375,End:135625,Text:"It’s not much bigger than an iPhone 6."},{Start:135625,End:136625,Text:"The story ends,"},{Start:136625,End:139333,Text:" for now at least, with the smartphone – "},{Start:139333,End:141458,Text:"little mini computers in your pocket. "},{Start:141458,End:142833,Text:"And to make a telephone call  "},{Start:142833,End:145250,Text:" you use a digital network."},{Start:145250,End:146375,Text:"Though ironically, "},{Start:146375,End:147958,Text:"not many people use these things "},{Start:147958,End:149125,Text:"to speak to one another, "},{Start:149125,End:151208,Text:" they mostly use them to send messages, "},{Start:151208,End:152333,Text:"search for information"},{Start:152333,End:155291,Text:"or watch little videos, like this one."}]},
{id:15,SubsArray : [{Start:18708,End:19708,Text:"I’m Steve Zack. "},{Start:19708,End:21041,Text:"I’m a conservation scientist "},{Start:21041,End:23125,Text:"for the Wildlife Conservation Society. "},{Start:23125,End:26083,Text:" I currently work in the North America Programme. "},{Start:26083,End:29375,Text:" The tundra of Arctic Alaska is a plain"},{Start:29375,End:32249,Text:"by general description, but anything but. "},{Start:32249,End:34125,Text:" It is there that you see polar bear, "},{Start:34125,End:36833,Text:"we see musk ox, we see Arctic fox,"},{Start:36833,End:38458,Text:"and in the early parts of the year, "},{Start:38458,End:40875,Text:"when the snow is just receding from the landscape,"},{Start:40875,End:41625,Text:"all of a sudden,"},{Start:41625,End:43458,Text:" you’re in a very lively place "},{Start:43458,End:45166,Text:"because birds are literally coming "},{Start:45166,End:46208,Text:"from every continent, "},{Start:46208,End:48333,Text:"every ocean to breed in the Arctic. "},{Start:48333,End:50166,Text:"So whether it’s Antarctica, "},{Start:50166,End:51583,Text:"or southern South America,"},{Start:51583,End:52416,Text:" or Australia,"},{Start:52416,End:54500,Text:" or New Zealand, or the Indian Ocean,"},{Start:54500,End:57458,Text:"we have birds that have come from there to breed."},{Start:57458,End:61666,Text:"We have shorebirds with spectacular displays,"},{Start:61666,End:63250,Text:" we also see waterfowl from everywhere "},{Start:63250,End:63875,Text:"in the world."},{Start:63875,End:67083,Text:"We have big goose populations, swans,"},{Start:67083,End:69500,Text:"Arctic ducks that many people have never seen. "},{Start:69500,End:72666,Text:"The reason why so many waterfowl, "},{Start:72666,End:73500,Text:" so many shorebirds, "},{Start:73500,End:75625,Text:" so many migratory birds end up there"},{Start:75625,End:77375,Text:" is because it’s remote."},{Start:77375,End:79458,Text:" There’s a very short growing season there"},{Start:79458,End:80500,Text:" for the birds to be in, "},{Start:80500,End:83000,Text:"just long enough for them to raise their young. "},{Start:83000,End:85833,Text:"And those very forces of short season "},{Start:85833,End:87541,Text:"and far north mean that "},{Start:87541,End:90375,Text:"there are naturally very few predators there."},{Start:90375,End:91541,Text:"And in this day and age, "},{Start:91541,End:92875,Text:"climate change is bringing "},{Start:92875,End:95541,Text:" earlier and earlier seasons to the Arctic."},{Start:95541,End:97333,Text:"The birds are arriving earlier, "},{Start:97333,End:99083,Text:"putting their young out earlier,"},{Start:99083,End:100791,Text:" almost like a day earlier "},{Start:100791,End:102833,Text:"every year on the average. "},{Start:102833,End:105041,Text:"And what we’re trying to understand is:"},{Start:105041,End:107291,Text:"are their young coming out at a time"},{Start:107291,End:108916,Text:"when the insects are still peak"},{Start:108916,End:110916,Text:"that they can feed on them, and"},{Start:110916,End:112875,Text:" does that earlier arrival mean "},{Start:112875,End:114708,Text:" that they have to leave other wetlands"},{Start:114708,End:116041,Text:" in the world earlier "},{Start:116041,End:118125,Text:" than they can get enough resources"},{Start:118125,End:120750,Text:"to fuel their migration?"},{Start:120750,End:123791,Text:"Well, one of the changes in the Arctic is"},{Start:123791,End:126791,Text:" shoreline erosion because of climate change. "},{Start:126791,End:128583,Text:"Permafrost is melting, "},{Start:128583,End:130208,Text:" so one effect is the shorelines "},{Start:130208,End:132625,Text:"are really falling apart in the Arctic."},{Start:132625,End:135333,Text:" A year ago, we wanted to see if that mattered"},{Start:135333,End:137708,Text:" to the shorebirds that need those shorelines"},{Start:137708,End:138750,Text:"after breeding. "},{Start:138750,End:140291,Text:" So we were in a new position. "},{Start:140291,End:142791,Text:"Also new to the shorelines were polar bear."},{Start:142791,End:144458,Text:"Polar bear that had been unable"},{Start:144458,End:146666,Text:"to get out onto the sea ice  "},{Start:146666,End:148250,Text:"because of climate change,"},{Start:148250,End:150166,Text:"and that put us in harm’s way."},{Start:150166,End:152041,Text:" So we had to evacuate the camp. "},{Start:152041,End:154625,Text:"And so, the paradox is that "},{Start:154625,End:155833,Text:"we were trying to understand "},{Start:155833,End:157125,Text:" the effects of climate change,"},{Start:157125,End:158291,Text:" we couldn’t do so"},{Start:158291,End:160291,Text:" because of the effects of climate change."},{Start:160291,End:161875,Text:"And for us in the conservation world,"},{Start:161875,End:164333,Text:" this is a really interesting and new challenge."},{Start:164333,End:165833,Text:" As somebody working in the Arctic "},{Start:165833,End:167708,Text:"and seeing real changes here,"},{Start:167708,End:169916,Text:" in many ways, the cat is out of the bag."},{Start:169916,End:171583,Text:" Climate change is a real,"},{Start:171583,End:173916,Text:"and will be a real dominant force. "},{Start:173916,End:175333,Text:"And everybody has a stake"},{Start:175333,End:177333,Text:" in what happens in Arctic Alaska "},{Start:177333,End:178708,Text:"because at some level,"},{Start:178708,End:181333,Text:"their birds are there as well. "},{Start:181333,End:184458,Text:" So I think the Arctic offers a unique possibility"},{Start:184458,End:187083,Text:"to reach across all kinds of peoples"},{Start:187083,End:189291,Text:"because it’s their wildlife too,"},{Start:189291,End:191000,Text:"bound by migration, "},{Start:191000,End:191916,Text:"for these birds that"},{Start:191916,End:194875,Text:" literally touch every place on the planet. "}]},
{id:16,SubsArray : [{Start:11541,End:13291,Text:"Usain Bolt can complete a hundred metres"},{Start:13291,End:16625,Text:" in so few strides but in an economical way. "},{Start:16625,End:17958,Text:" Most people, if they tried to do that, "},{Start:17958,End:20375,Text:"would overstride and it would slow them down."},{Start:20375,End:25083,Text:"So he’s able, because he’s got such long legs, "},{Start:25083,End:28833,Text:"to run with fewer strides, and potentially,"},{Start:28833,End:30875,Text:"that could impact on his ability "},{Start:30875,End:32291,Text:"to maintain his speed."},{Start:32291,End:34291,Text:" Because if you imagine that every stride "},{Start:34291,End:37208,Text:"carries with it an amount of fatigue say,"},{Start:37208,End:39000,Text:" then he’s taking fewer strides than his rivals. "},{Start:39000,End:42416,Text:" So that could also impact on his speed endurance."},{Start:42416,End:43500,Text:"So he’s running faster"},{Start:43500,End:45041,Text:" than them in his top-end speed, "},{Start:45041,End:48583,Text:" but he’s also maintaining his speed better too. "},{Start:48583,End:49875,Text:" As with a lot of sprinters, "},{Start:49875,End:52291,Text:"he’s got a lot of muscle mass around the hip"},{Start:52291,End:53458,Text:"and around the knee "},{Start:53458,End:56583,Text:" and not very much muscle mass in his lower leg, "},{Start:56583,End:58083,Text:"which allows him to be more efficient"},{Start:58083,End:58916,Text:"in the way that he moves, "},{Start:58916,End:61750,Text:"so he can swing his leg through more quickly. "},{Start:61750,End:62916,Text:" He’s extremely powerful."},{Start:62916,End:64958,Text:"All sprinters are extremely powerful. "},{Start:64958,End:67416,Text:"They can generate six times their body weight "},{Start:67416,End:69625,Text:" in ground reaction forces in a split second "},{Start:69625,End:71708,Text:"and they spend very little time on the ground,"},{Start:71708,End:74000,Text:" so they can hit the ground and rebound "},{Start:74000,End:75375,Text:" and be back up in the air in"},{Start:75375,End:77583,Text:" eighty or ninety milliseconds. "},{Start:77583,End:80000,Text:" And over the course of a 200-metre race,"},{Start:80000,End:81541,Text:" he sustains his speed very well,"},{Start:81541,End:83916,Text:" so he’s got an incredible speed endurance. "},{Start:83916,End:84916,Text:"I mean his world record, "},{Start:84916,End:88000,Text:" he was still over twelve metres per second"},{Start:88000,End:90000,Text:"when he went through the line in the 100 metres."},{Start:90000,End:92250,Text:"So he’s got a great speed endurance,"},{Start:92250,End:94416,Text:" he slows down less than his rivals."},{Start:94416,End:95708,Text:"I don’t think there’s any one thing"},{Start:95708,End:98416,Text:"that makes Usain Bolt the greatest of all time."},{Start:98416,End:99958,Text:" I think, to be a top sprinter,"},{Start:99958,End:101541,Text:"it’s multifactorial,"},{Start:101541,End:103041,Text:"you have to have all the elements."},{Start:103041,End:105166,Text:"Because he was so talented as a youngster"},{Start:105166,End:108041,Text:"the implication is probably that"},{Start:108041,End:111625,Text:" it’s largely due to nature,"},{Start:111625,End:115333,Text:" but without the element of hard work"},{Start:115333,End:119083,Text:"that he put in towards the middle of his career, "},{Start:119083,End:121041,Text:" I suppose after having a couple of years "},{Start:121041,End:121583,Text:"where he perhaps"},{Start:121583,End:124083,Text:"didn’t perform as well as he would have liked,"},{Start:124083,End:125583,Text:" I don’t think he would have been anything like"},{Start:125583,End:126333,Text:" the athlete he is. "},{Start:126333,End:129499,Text:"So I would say, probably majority nature, "},{Start:129499,End:130916,Text:"but without the nurture he certainly"},{Start:130916,End:133708,Text:"wouldn’t be the athlete he is today."}]},
];



var subs;
var videoCurrent=1;
var scale=1;

//Scroll bars: variables
var bottom;
var thumbRows;
var totalWidth;
var scrollTimes=0;
var position=0;
var totalHeight=0;
var firstLine = 0;
//Scroll bars: variables end

if(window.name=="First"){
introLock=1	;

}

	 try{if(localStorage.getItem("project")){
		var root=JSON.parse(localStorage.getItem("project"));
		var flag=1;
		 $.each(root.Projects, function( index, value ) {
			if(value.Project==projectName){flag=0;return false;}

		});
		if(flag==1){
			root.Projects.push({"Project":  projectName});
			localStorage.setItem("project", JSON.stringify(root));
		}
	}
	else{
		localStorage.setItem("project", '{"Projects":[{"Project": "'+ projectName +'"}]}');
	 }
	 }catch(err){}




function coords(e,rel){
	var IWB= $(".IWB").offset();
	var click={};
	var box={};
	var str={};
	try{
		if(e.originalEvent){
			click.top=e.originalEvent.changedTouches[0].clientY;
			click.left=e.originalEvent.changedTouches[0].clientX;
		}
		else{
			click.top=e.changedTouches[0].clientY;
			click.left=e.changedTouches[0].clientX;

		}
	}
	catch(err){
		click.top=e.clientY;
		click.left=e.clientX;
	}
	box.top  = $(rel).offset().top;
	box.left = $(rel).offset().left;

	str.top=(click.top-box.top)/scale;
	str.left=(click.left-box.left)/scale;

	return str;
}


$( document ).ready(function() {

//intro fix
if(typeof year === 'undefined' || year === null){window.location.href = "Intro.html";}
var today = new Date();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(yyyy>year||(yyyy==year&&mm>12)){
	window.location.href = "Intro.html";
}

var version ="1.0"
$(".IWBVersion").append(version);

$("body").append('<audio class="clickSound"><source src="Audio/Click.mp3" type="audio/mpeg"></audio>');


if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}
else{
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}



function showSpread(obj,objTwo){
	
 	z = obj;
	var io;
	var j;
	var count = 0;
	

	var thumbs = eval(objTwo);

	for (io= 0; io < thumbs.length; io++)
	{
		
		count++;
		if(z==thumbs[io].Module)
		{
			// console.log(thumbs[io].Module);
			var imgContainer ='<div class="secondImages imgs-lvl-' + parseInt(io + 1) + ' ">' ;
			$('[data-second="' + objTwo + '"] [data-secondmodule="' +thumbs[io].Module + '"]').append(imgContainer);
			$('[data-second="' + objTwo + '"] [data-secondtargetmodule="' +thumbs[io].Module + '"]').append(imgContainer);

			

			var keep = thumbs[io].Propeties;
			
			
			for (j= 0; j< keep.length; j++)
			{	

				if(keep[j].Pages.includes(","))
	 			{
	 				var res = keep[j].Pages.split(",");
	 				var spread =   '<div class="spr-lvl-' + parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ res[0] + '</span>'+'<span>' +'p. '+ res[1] + '</span>'+'</div>' ;
	 				$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
	 			}	
	 			else{
		 	 		var spread =   '<div class="spr-lvl-' + parseInt(j + 1) + '"><img src="' +keep[j].src + '">'  + '<span>' +'p. '+ keep[j].Pages + '</span>'+'</div>' ;
		 			$('[data-second="' + objTwo + '"] .imgs-lvl-'+ parseInt(io + 1)).append(spread);
	 			}	
			}
		}

	
	}

	$("img").each( function() 
	{
			this.onload = function () {
			if(count ===thumbs.length ){
		
				$(".IWB").removeClass("loading");
				scrollMenu();
			}
		}

	});
}

 $('[data-secondmodule]:not([data-gotoframe])').one("click", function() 
 {
 	
 	 if($(this).find("div.secondImages").length==0)
 	{
 		$(".IWB").addClass("loading");

	 	var typ = this.getAttribute('data-secondmodule');
	 	var sec = $(this).closest("div.secondVisible").attr("data-second");
	 	
		showSpread(typ,sec);
	}

});


	var imgs = document.images,
	    len = imgs.length,
	    counter = 0;

$("img").each( function( ) {	
	$(this).on('load', incrementCounter ).on('error',incrementCounter).attr("src", $(this).attr("src")+ "?" + new Date().getTime());	
});//fix







function incrementCounter() {
	
    counter++;
    if ( counter === len ) {
        $(".IWB").removeClass("loading");
		try{
			if(JSON.parse(window.name)){
						
			var cor=JSON.parse(window.name);
			console.log(cor);
			scrollMenu();
				if(cor.Type=="PV"||cor.Type=="PG"||cor.Type=="PR"||cor.Type=="PM"||cor.Module=="Revision"||cor.Type=="TE"||cor.Type=="VW"){			
					
						$(".secondVisible").removeClass("secondVisible");
						$("[data-second]").fadeOut(0);
						$("[data-second="+ cor.Type +"],.secondButtonWrapper").fadeIn(0);
						$("[data-second="+ cor.Type +"]").addClass("secondVisible");
						$(".mainBgEx").addClass('hidden');
						showSecondLevel();
					}		
					
										
					else{		
						if(cor.Type!="GA"){
							$(".mainBgEx").toggleClass('hidden');
						}
						else {
							$(".mainBgEx").addClass('hidden');
							
						}
						
						showLesson(cor.Type,cor.Module);
						showSpread(cor.Module,cor.Type);
						
					}
					
					
				}
			
		}
		catch(err){}
		window.name = null;

		 if(introLock==1)
		{ 
			$(".intro").append("<div class='playIntroSound'>Let's start</div>");			
			$(".IWB").addClass("IntroActive");			
		}
    }
}



 $(document).on("click", ".playIntroSound", function (e) {
	e.stopPropagation();
	$(this).remove();
	$(".intro audio")[0].addEventListener("ended", function(){
		$(".IntroActive").removeClass("IntroActive");
	});
	$(".intro").addClass("introNext");
	$(".intro audio")[0].play();
});
 



$(document).on("click", ".introNext", function () {
	$(".IntroActive").removeClass("IntroActive");
	$(".intro audio")[0].pause();
});



$(document).on("click", "[data-moduletarget]", function () {
	$(".mainModules,[data-module]").fadeOut(0);
	$(".mainLessons,[data-module="+ $(this).attr("data-moduletarget") +"]").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", "[data-game]", function () {

	window.name = "GameModule:"+$(this).closest("[data-gamemodule]").attr("data-gamemodule");
	window.open("Games/"+ $(this).attr("data-game") +"/"+$(this).attr("data-game")+".html",'_self');
});

$(document).on("click", ".slideshowButtonWrapper>span", function () {

	$(".slideshowButtonActive").removeClass("slideshowButtonActive");
	$(this).addClass("slideshowButtonActive");
	$(".slideshow img:first-child").css("margin-left",-$(this).index()*1280+"px")
});



$(document).on("click", "[data-extramodule]>span", function () {
	if($(this).parent().hasClass("modulesExtraExp")){
		$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		}
	else{$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		$(this).parent().addClass("modulesExtraExp");
		$(this).siblings(".modulesExtraSub").slideDown();

	}
});

$(document).on("click", ".modulesTrigger", function () {
	$(".modulesExtra").slideToggle();
	$(".modulesExtraExp .modulesExtraSub").slideToggle();
	$(".modulesExtraExp").removeClass("modulesExtraExp");
});

//Modules and more close
$(document).mouseup(function (e) {
   if (!$(".modulesMore").is(e.target) // if the target of the click isn't the container...
   && $(".modulesMore").has(e.target).length === 0) // nor a descendant of the container
   {
     $(".modulesExtra").slideUp();
  }
});
$(document).on("mousedown", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=PV]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$(".clickSound")[0].play();
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});



$(document).on("mouseenter touchstart", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=PV]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});

$(document).on("mouseup", function () {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
});
$(document).on("mouseleave touchend", ".topBar,.bottomBar,[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,.helpBtn,.helpExit,.instr-Btn,[data-second]:not([data-second=PV]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages:not(.secondImagesCM) div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});

});


$(document).on("click", "[data-secondtarget]", function () {
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"],.secondButtonWrapper").fadeIn(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"]").addClass("secondVisible");
	showSecondLevel();
	if($(this).attr("data-secondtarget")=="PC" || $(this).attr("data-secondtarget")=="PG" || $(this).attr("data-secondtarget")=="PR" || $(this).attr("data-secondtarget")=="PM" || $(this).attr("data-secondtarget")=="PV" || $(this).attr("data-secondtarget")=="VW")
	{
		$(".mainBgEx").addClass('hidden');
	}
	else {
		$(".mainBgEx").toggleClass('hidden');
	}
});


$(document).on("click", "[data-goto]", function () {

	var splitTxt=$(this).attr("data-goto").split(";");
	if(splitTxt[1]){window.name = '{"Frame":"'+splitTxt[1]+'"}';}
	setTimeout(function(){window.location.href = splitTxt[0] +".html";}, 200);
});

$(document).on("click", "[data-video]", function () {
	$(".IWB").addClass("loading");
	$(".videoWrapper source").attr("src","Video/"+ $(this).attr("data-video") +".mp4");
	$(".videoWrapper").css("display","block");
	vFlag=1;
	targetSub=$(this).attr("data-targetsub");
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();

	videoCurrent=1;
});

$('.videoWrapper video').on('canplay', function(){
	if(vFlag==1){
	$(".playBtn").removeClass("playBtn").addClass("pauseBtn");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").html("");	
	$(".subsSpan").fadeOut(0);
	$("[data-videopart]").remove();
	
	
	if(targetSub){
		$.each(Subs, function( index, value ) {
			if(value.id==targetSub){
				subs=value.SubsArray;
				if(value.Parts){
					$.each(value.Parts, function( index2, value2 ) {
						if(value2.time==0){}//No Part2 fix
						else{
							var left=value2.time/1000/$(".videoWrapper video")[0].duration*265+"px";
							$(".videoBar").append("<div data-videopart="+ value2.time +" style='left:"+ left +"'>"+ String.fromCharCode((index2+65)) +"</div>");
						}
					});
				}
				
				
			return false;}

		});
		
		
		
		
	};
	vFlag=0;
	videoInterval=setInterval(videoBar,20);
		$(".IWB").removeClass("loading");
}

});

$(document).on("click", ".videoPause", function () {


	$(".videoWrapper video")[0].pause();
	$(".videoPause").removeClass("videoPause");

	clearInterval(videoInterval);

});

 $(document).on("click", ".videoPlayBtn:not(.videoPause)", function () {
	$(".videoWrapper video")[0].play();
	$(this).addClass("videoPause");
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".closeVideo", function () {
	clearVideo();
	$(".videoWrapper").fadeOut(0);
});

$(document).on("click", ".subsOff", function () {
	$(".subsOff").removeClass("subsOff");
	$(".subsSpan").fadeIn(0);
});

$(document).on("click", ".subsOn:not(.subsOff)", function () {
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").fadeOut(0);
	});

$(document).on("click", ".videoBar", function (e) {
	$(".subsSpan").html("");
	if(!$(e.target).is("[data-videopart]")){
    clearInterval(videoInterval);
	var left=coords(e,".videoBar").left;
	var percentage = (left)/$(this).width();
	var crTime=percentage*$(".videoContainer video")[0].duration*1000;
	$(".videoContainer video")[0].currentTime=percentage*$(".videoContainer video")[0].duration;
	
	$.each(subs, function( index, value ) {

		if(index==0&&value.Start>crTime){
			$(".subsSpan").html("");videoCurrent=1;return false;
			}
		try{
			if(value.Start<crTime){
				videoCurrent=index+1;
				if(value.End>crTime){
					$(".subsSpan").html(subs[videoCurrent-2].Text);
				}
				return false;
			}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
	}
});

$(document).on("click", "[data-videopart]", function (e) {
	$(".subsSpan").html("");
    clearInterval(videoInterval);
	
	$(".videoContainer video")[0].currentTime=$(this).attr("data-videopart")/1000;
	var crTime=$(".videoContainer video")[0].currentTime;
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){$(".subsSpan").html("");videoCurrent=1;return false;}
		try{if(value.Start<crTime){videoCurrent=index+1;if(value.End>crTime){$(".subsSpan").html(subs[videoCurrent-2].Text);}return false;}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".videoPause ~ .videostopBtn svg", function () {


		clearVideo();
		$(".videoPlayBtn").removeClass("videoPause");
});

$('.videoContainer video').on('ended', function() {
   clearVideo();
	$(".pauseBtn").removeClass("pauseBtn").addClass("playBtn");
	$(".videoWrapper").fadeOut(0);

});

//$(".topBar,.bottomBar").css("cssText","min-width:882px!important;"); 

//Scroll bars: function
function scrollMenu(){
	thumbRows = 1;
	totalWidth = 0;
	scrollTimes = 0;
	position = 0;
	firstLine = 0;
	bottom = 0;
	$(".topBar,.bottomBar").hide().fadeIn(0);
	$(".secondVisible [data-secondtargetmodule]").find(".secondImages div").each(function( index, value ) {			
			totalWidth=totalWidth+($(this).find("img").width());
			if(totalWidth <= 882){
				firstLine=firstLine+($(this).width())+29;
			}
	});
	thumbRows = Math.floor(totalWidth/882) + 1;
	
	//$(".topBar,.bottomBar").css("width",firstLine+"px");
	 $(".topBar,.bottomBar").css("width",$(".secondImages").width() + "px");
	
	bottom = $(".secondVisible [data-secondtargetmodule]").find(".secondImages").prop("scrollHeight");
	$(".topBar").fadeTo(0,0);
	$(".topBar").addClass("disabledBar");
	$(".bottomBar").addClass("disabledBar");
	if (bottom > 482){
		$(".bottomBar").fadeTo(0,1);
		$(".bottomBar").removeClass("disabledBar");
	}
	else{$(".bottomBar").fadeTo(0,0);}
}
//Scroll bars: function end

$(document).on("click", "[data-secondmodule]:not([data-gotoframe])", function () {
		$(".secondButtonHidden").removeClass("secondButtonHidden");
		$(this).addClass("secondButtonHidden");
		$(".secondMore").html($(this).html());
		
		//$(".logoImg img").attr("src","");//change

	$(".secondMore").attr("data-secondtargetmodule",$(this).attr("data-secondmodule"));
	$(".secondMore").fadeIn(0);
	$(".secondButtonWrapper").fadeOut(0);
    scrollMenu(); //Scroll bars: function call
});


//Scroll bars: Top-Bottom bars buttons
$(document).on("click", ".topBar:not(.disabledBar)", function () {
	scrollTimes = scrollTimes - 241;
    $(".secondImages").animate({scrollTop:(scrollTimes)}, 600);
	console.log(scrollTimes+482);
	if(scrollTimes == 0){$(".topBar").fadeTo(0,0);$(".topBar").addClass("disabledBar");}
	$(".bottomBar").fadeTo(0,1);
	$(".bottomBar").removeClass("disabledBar");
});

$(document).on("click", ".bottomBar:not(.disabledBar)", function () {
	scrollTimes = scrollTimes + 241;
    $(".secondImages").animate({scrollTop:(scrollTimes)}, 600);
	console.log(scrollTimes+482);
	if(bottom <= (scrollTimes+482)){$(".bottomBar").fadeTo(0,0);$(".bottomBar").addClass("disabledBar");}
	$(".topBar").fadeTo(0,1);
	$(".topBar").removeClass("disabledBar");
});
//Scroll bars: Top-Bottom bars buttons end

//Scroll bars: wheel function
$(document).on( 'mousewheel DOMMouseScroll', '.secondImages', function(e){
	var delta;
	if (e.originalEvent)
	{
		if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
		if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
		if (e.originalEvent.detail) delta = e.originalEvent.detail;
	}
	delta = (delta<0 ? -1 : 1);
	
	//console.log(delta, e);
	
	console.log($(".secondImages").scrollTop());
	console.log($(".secondImages").scrollTop() + 100 * delta);
	
	position = $(".secondVisible").find(".secondImages").scrollTop() + 100 * delta;
	totalHeight = $(".secondVisible").find(".secondImages").prop("scrollHeight");
	
	if ( position > 0 && bottom > 482)  // eimaste endiamesa
	{
		$(".topBar").fadeTo(0,1);
		$(".topBar").removeClass("disabledBar");
	}
	else // eimaste terma panw
	{
		$(".topBar").fadeTo(0,0);
		$(".topBar").addClass("disabledBar");
	}
	if ( (position+482) >= totalHeight ) // eimaste terma katw
	{
		$(".bottomBar").fadeTo(0,0);
		$(".bottomBar").addClass("disabledBar");
	}
	else{
		if(bottom > 482)   // eimaste endiamesa
		{
			$(".bottomBar").fadeTo(0,1);
			$(".bottomBar").removeClass("disabledBar");
		}
	}
	console.log(totalHeight);
});
//Scroll bars: wheel function end
    
/* $(document).on('mousewheel',function (e) {
      var delta = e.originalEvent.wheelDelta;
      console.log('scroll ' + delta, e);
	  if ( delta >= 120 ){
		$(".bottomBar").fadeIn(0);
	  }
	  else if ( delta <= -120 ){
		$(".topBar").fadeIn(0);
	  }
}); */

$(document).on("click", "[data-secondmodule][data-gotoframe]", function () {
	var pre="Module";
	window.name = '{"Frame":"'+ $(this).attr("data-gotoframe")+'"}';
	if($(this).closest("data-second")=="GB"){pre="Module"}
	var loc="EX/"+pre + $(this).attr("data-secondmodule") +".html";
	setTimeout(function(){window.location.href = loc;}, 200);


});

$(document).on("click", "[data-type='VC']:not([data-disabled])", function () {
	let modRedirect = $(this).closest("[data-extramodule]").attr("data-extramodule");
	
	if(modRedirect == "15"){modRedirect = "14";}
	if(modRedirect == "16"){modRedirect = "15";}
	if(modRedirect == "18"){modRedirect = "16";}
	if(modRedirect == "20"){modRedirect = "17";}
	if(modRedirect == "21"){modRedirect = "18";}
	if($(this).parents("[data-extramodule]").length>0){
		window.name = '{"GlossaryModule":"'+ modRedirect +'","Return":"menu"}';
	}
	setTimeout(function(){window.location.href = "EX/Vocabulary.html";}, 200);
});

$(document).on("click", "[data-type='ABC']:not([data-disabled])", function () {

	setTimeout(function(){window.location.href = "EX/ABCBook.html";}, 200);
});


$(document).on("click", "[data-extra]", function () {
	console.log($(this).data("extra"));
	//new way showSpreads
	showLesson($(this).attr("data-extra"),$(this).closest("[data-extramodule]").attr("data-extramodule"));
	if(!$('.mainBgEx').hasClass('hidden'))
	{
		$(".mainBgEx").toggleClass('hidden');
	}
	// checks if images already exist;
 	if($(".secondVisible [data-secondtargetmodule]").find(".secondImages div").length==0 && $(this).data("extra") != "GA")
 	{
 		$(".IWB").addClass("loading");
		showSpread($(this).closest("[data-extramodule]").attr("data-extramodule"),this.getAttribute('data-extra'));
	}

});

$(document).on("click", ".modulesExtraSub span", function () {
$(".modulesExtra").fadeOut(0);

});


$(document).on("click", ".secondImages:not(.secondImagesCM) div", function () {
	var type=$(this).closest("[data-second]").attr("data-second");
	var mod=$(this).closest("[data-secondtargetmodule]").attr("data-secondtargetmodule");	
	var img=$(this).children("img").attr("src").replace("Images/Spreads/","");//fix
	window.name = '{"Image":"'+img.substr(0,img.indexOf("_thumb"))+'"}';//fix
	
	
	
	console.log(window.name);
	if($(this).closest("[data-second]").attr("data-second")=="ABC"){setTimeout(function(){window.location.href = "EX/ABCBook.html";}, 200);}
	else{


	setTimeout(function(){window.location.href = type+"/Module"+ mod +".html";}, 200);

	}
});








$(document).on("click", ".secondBackbtn", function () {
	//Scroll bars: hide bars
	position=0;
	$(".secondMore").fadeOut(0);
	$(".topBar,.bottomBar").fadeOut(0);
    //Scroll bars: hide bars end
	var inp=$(".secondVisible").attr("data-second");

	try
	{
		
		if($(".secondVisible .secondMore").html().length>20){
			console.log("bbbb");
			$(".secondVisible .secondButtonWrapper").fadeIn(0);
			$(".secondMore").fadeOut(0).html("");
			$(".secondButtonHidden").removeClass("secondButtonHidden");
			$(".topBar,.bottomBar").fadeOut(0);
		}
		else{
			console.log("cccc");
			$(".mainBgEx").toggleClass('hidden');
			$("[data-second]").fadeOut(0);
			showFirstLevel();
			$(".main [data-secondtarget]").each(function( index, value ) {			
				if($(this).attr("data-secondtarget")==inp){
					if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
					showSecondLevel();}
					return false;}
			});	
		}
	}
	
	catch(err){
		
		console.log(inp);
		$("[data-second]").fadeOut(0);
		showFirstLevel();
		$(".main [data-secondtarget]").each(function( index, value ) {		
		if($(this).attr("data-secondtarget")==inp){
			if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
			showSecondLevel();}
			return false;
			}
	});
		if(inp!="PC" && inp!="PG" && inp!="PR" && inp!="PM" && inp!="PV"){$(".mainBgEx").removeClass('hidden');}
		else{$(".mainBgEx").addClass('hidden');}
		
	}
	
	//$('.modulesMore').css('display','block');
});	



$(document).on("click", ".homeBtn", function () {
	showFirstLevel();
});


$(document).on("click", ".helpBtn", function () {
	$(".help").fadeIn(0);
	$(".helpBtn").fadeOut(0);
	$("#main").fadeOut(0);
});

$(document).on("click", ".helpExit svg", function () {
	$(".help").fadeOut(0);
	$(".helpBtn").fadeIn(0);
	$("#main").fadeIn(0);
});

$(document).on("click", ".instr-Btn", function () {
	window.open('Instructions_Brochure.pdf');
});	

function showSecondLevel(){
	$(".firstLevel").fadeOut(0);
	$(".secondLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainActive");

}

function showFirstLevel(){
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	$(".secondMore").html("");
	$(".secondLevel").fadeOut(0);
	$(".firstLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainInactive");
	$(".secondVisible").removeClass("secondVisible");
}

function showLesson(second,module){
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ second +"]").fadeIn(0).addClass("secondVisible");


	var inp=$("[data-second="+ second +"] [data-secondmodule="+ module +"]>div:first-child");
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	inp.parent().addClass("secondButtonHidden");
	$(".secondMore").html(inp.closest(".secondButton").html()).attr("data-secondtargetmodule",module);
	$(".secondMore").slideDown(0);
	$(".secondButtonWrapper").fadeOut(0);

	showSecondLevel();
	$(".modulesExtra").slideUp(0);
	$(".modulesExtraExp .modulesExtraSub").slideUp(0);
	$(".modulesExtraExp").removeClass("modulesExtraExp");
    
    scrollMenu();//Scroll bars: function call
}

function clearVideo(){
try{
clearInterval(videoInterval);
}
	catch(err){}
$(".videoContainer video")[0].pause();
try{$(".videoContainer video")[0].currentTime=0;}catch(err){}
$(".videoPlayBtn").addClass("videoPause");
$(".videoTimer").html("00:00");
$(".videobarRed").css("width","0px");
videoCurrent=1;	
	
}

function videoBar(){
var percentage=$(".videoContainer video")[0].currentTime/$(".videoContainer video")[0].duration;
var phrTime=$(".videoContainer video")[0].currentTime*1000;
if(percentage>1){percentage=1;}
var soundBarWidth=$(".videoBar").width();
var bWidth=percentage*soundBarWidth;
$(".videoBar .videobarRed").css("width",bWidth+"px");
$(".videoBar .barRed").css("width",bWidth+"px");
$(".barRedBall").css("left",(bWidth-7)+"px");

var tr = minTwoDigits(Math.floor(($(".videoContainer video")[0].currentTime + 1) / 60)) + ":" + minTwoDigits(Math.ceil($(".videoContainer video")[0].currentTime) % 60);
$(".videoTimer").html(tr);	

	$('.barRedBall').each(function() {
	var left = parseFloat($(this).css("left").replace("px"));
	  if (left > 255) {
		$(this).css("left","255px");
	  }
	});
if(subs){
	try{if(phrTime>=subs[videoCurrent-1].Start){
			$(".subsSpan").html(subs[videoCurrent-1].Text);
		}	
	}catch(err){}

	try{if(phrTime>=subs[videoCurrent-1].End){
			$(".subsSpan").html("");
			videoCurrent++;		
		}
	}catch(err){}
}	
}

function minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}



$(window).resize(function() {



  if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;

	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}

else{
$('.IWB').css({'-webkit-transform': 'scale(1)'});
	$('.IWB').css({'-ms-transform': 'scale(1)'});
	$('.IWB').css({'transform': 'scale(1)'});
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}

});


});
