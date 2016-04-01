// This script stores data that is used by the functions in quotes-view.js

/* Here, you'll find the following variable/array objects:
 *
 *    1. var quotes => Contains all the Dwight Schrute quotes
 *    2. var quotes_sfw => Contains only work-safe Dwight Schrute quotes
 *    3. var intro_content => Contains introductory content
 *    4. var error_out_of_range => Displayed when num_paragraphs is out of range
 *    5. var error_not_number => Displayed when num_paragraphs is not an int
 *
 */

// 1. var quotes => Contains all the Dwight Schrute quotes

var quotes = new Array();

quotes[0] = "How would I describe myself? Three words: Hard working... Alpha male... Jackhammer... Merciless... Insatiable...";

quotes[1] = "Through concentration, I can raise and lower my cholesterol at will. I train my major blood vessels to retract into my body on command. Also, I can retract my penis up into itself.";

quotes[2] = "In the wild, there is no healthcare. Healthcare is \"Oh, I broke my leg!\" A lion comes and eats you. You're dead. Well, I'm not dead. I'm the lion. You're dead.";

quotes[3] = "I grew up on a farm. I have seen animals having sex in every position imaginable. Goat on chicken. Chicken on goat. Couple of chickens doing a goat, couple of pigs watching...";

quotes[4] = "I am fast. To give you a reference point, I am somewhere between a snake and a mongoose... And a panther.";

quotes[5] = "I am faster than 80% of all snakes. Question: You know what's better than a triceratops? Only every other dinosaur that has ever existed.";

quotes[6] = "Dolphins get a lot of good publicity for the drowning swimmers they push back to shore, but what you don't hear about is the many people they push farther out to sea. Dolphins aren't smart. They just like pushing things.";

quotes[7] = "Before I do anything, I ask myself... \"Would an idiot do that?\" And if the answer is yes, I do not do that thing.";

quotes[8] = "Why tip someone for a job I'm capable of doing myself? I can deliver food. I can drive a taxi. I can, and do, cut my own hair. I did however, tip my urologist, because I am unable to pulverize my own kidney stones.";

quotes[9] = "As a volunteer Sheriff's Deputy, I've been doing surveillance for years. One time I suspected an ex-girlfriend of mine was cheating on me, so I tailed her for six nights straight. Turns out... She was... With a couple of guys, actually... So... Mystery solved.";

quotes[10] = "My girlfriend and I broke up recently. And I must say, I am relieved. Gives me a chance to sow my wild oats. In the Schrute family, we have a tradition, where when the male has sex with another woman, he is rewarded with a bag of wild oats left on his doorstep by his parents. You can use these oats to make oatmeal, bread, whatever you want. I don't care. They're your oats.";

quotes[11] = "Reject a woman, and she will never let it go. One of the many defects of their kind. Also, weak arms.";

quotes[12] = "A 30-year mortgage at Michael's age essentially means that he's buying a coffin. If I were buying my coffin, I would get one with thicker walls so you couldn't hear the other dead people.";

quotes[13] = "I have been Michael's number two guy for about five years. And we make a great team. We're like one of those classic famous teams. He's like Mozart and I'm like... Mozart's friend. No. I'm like Butch Cassidy and Michael is like... Mozart. You try and hurt Mozart? You're gonna get a bullet in your head, courtesy of Butch Cassidy.";

quotes[14] = "I like the people that I work with, generally. With four exceptions. Once I'm officially Regional Manager, my first order of business will be to demote Jim Halpert. So I will need a new number two. My ideal choice? Jack Bauer. But he is unavailable. Fictional. And overqualified.";

quotes[15] = "Would I ever leave this company? Look, I'm all about loyalty. In fact, I feel like part of what I'm being paid for here is my loyalty. But if there was somewhere else that valued loyalty more highly, I'm going wherever they value loyalty the most.";

quotes[16] = "When I die. I want to be frozen. And if they have to freeze me in pieces, so be it. I will wake up stronger than ever, because I will have used that time, to figure out exactly why I died. And what moves I could have used to defend myself better now that I know what hold he had me in.";

quotes[17] = "When my mother was pregnant with me, they did an ultrasound and found she was having twins. When they did another ultrasound a few weeks later, they discovered that I had adsorbed the other fetus. Do I regret this? No. I believe his tissue has made me stronger. I now have the strength of a grown man and a little baby.";

quotes[18] = "Babies are one of my many areas of expertise. Growing up I performed my own circumcision. Question: You're PMSing pretty bad, huh?";

quotes[19] = "I wish I could menstruate. If I could menstruate, I wouldn't have to deal with idiotic calendars anymore. I'd just be able to count down from my previous cycle. Plus, I'd be more in tune with the moon and the tides.";

// 2. var quotes_sfw => Contains only work-safe Dwight Schrute quotes

var quotes_sfw = new Array();
var nsfw_quotes = new Array(1, 3, 10, 18, 19);
var sfw_index = 0;

for (i = 0; i < quotes.length; i++)
{
   var is_nsfw = false;

   for (k = 0; k < nsfw_quotes.length; k++)
   {
      if (i == nsfw_quotes[k])
      {
         is_nsfw = true;
      }
   }
   if (is_nsfw == false)
   {
      quotes_sfw[sfw_index] = quotes[i];
      sfw_index = sfw_index + 1;
   }
}

// 3. var intro_content => Contains introductory content

var intro_content = "<p><strong>BLOOD ALONE MOVES THE WHEELS OF HISTORY!</strong></p>\n<p>Have you ever asked yourselves in an hour of meditation &ndash; which everyone finds during the day &ndash; why Lorem Ipsum is still the de facto filler text for publishers and graphic designers?</p>\n<p>Not only the years we've been at war, the war of work, but from that moment as a child. When we realize that the world could be conquered.</p>\n<p>I say, designers and publishers of the world... Unite. We must never again use boring filler text from the times of Cicero.</p>\n<p>For it is together...</p>\n<p><strong>TOGETHER THAT WE PREVAIL.</strong></p>";

// 4. var error_out_of_range => Displayed when num_paragraphs is out of range

var error_out_of_range = "<p><strong>What you just typed is an appropriate number of paragraphs?</strong></p><p>False. The number should be between 0 and 51. Decimals always round up.</p><p>Idiot.</p>";

// 5. var error_not_number => Displayed when num_paragraphs is not an int

var error_not_number = "<p><strong>What you just typed is a numerical number?</strong></p><p>False. You're PMSing pretty bad, huh?</p><p>Type an integer, idiot.</p>";
