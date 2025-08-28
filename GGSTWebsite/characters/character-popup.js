// Character Pop-up Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Sample character data (in a real implementation, this would come from a database or API)
    const characterData = {
        'SOL BADGUY': {
            name: 'SOL BADGUY',
            sprite: '/images/IMAGE_10.png',
            type: 'balance',
            ease: 5,
            description: " An aggressive striker who beats the opponent down with style. A blunt and short-tempered man. He only speaks when required, and uses as few words as he can get away with. He's not very good at explaining things, so he prefers to express himself with his aggressive behavior and attitude. While most see him as selfish and violent, those closest to him accept him for who he is.",
            commandList: '/images/IMAGE_70.png'
        },
        'KY KISKE': {
            name: 'KY KISKE',
            sprite: '/images/IMAGE_12.png',
            type: 'balance',
            ease: 5,
            description: "A classic all-rounder with excellent moves. A serious man who dedicates himself completely to his work, the people, and his morals. His love for justice and determination to help those less fortunate is reflected in all aspects of his life. On the other hand, this also means he can show rather extreme dislike for anything that disrupts the peace or breaks the rules. After taking his position as King, this enthusiasm shifted into a broader perspective, allowing him to see the world from a variety of viewpoints. This isn't to say, however, that he can't still come off as naïve and emotional at times.",
            commandList: '/images/IMAGE_71.png'
        },
        'MAY': {
            name: 'MAY',
            sprite: '/images/IMAGE_14.png',
            type: 'power',
            ease: 5,
            description: "A powerful attacker who specializes in charging at the opponent. A spunky girl who doesn't sweat the small stuff. She believes in acting before thinking too deeply. Her friends often get dragged along with her impulsive behavior. Despite this, May's positive attitude is contagious to those around her, even if they sometimes find themselves a tad exhausted.",
            commandList: '/images/IMAGE_72.png'
        },
        'AXL LOW': {
            name: 'AXL LOW',
            sprite: '/images/IMAGE_16.png',
            type: 'Zoning',
            ease: 3,
            description: "A long range attacker who can take opponents down at a distance. A young man from the 20th century with the ability to manipulate time. A typical optimist who doesn't take things too seriously and just goes with the flow. He is compassionate to a fault and could never ignore somebody in trouble. He despises the very idea of \"death\" and would never resort to taking a life, no matter the situation.",
            commandList: '/images/IMAGE_73.png'
        },
        'CHIPP ZANUFF': {
            name: 'CHIPP ZANUFF',
            sprite: '/images/IMAGE_18.png',
            type: 'shooting',
            ease: 3,
            description: "An incredibly fast ninja who launches attacks in the blink of an eye. President of the Eastern Chipp Kingdom. He's hot-blooded, and thinking deeply is far from his specialty. He's quick to lose his temper, and his words often come off as rude. Now that he's trying to get into politics, he's learned basic manners and social skills. He acknowledges that he has some rough edges, but accepts those parts of himself.",
            commandList: '/images/IMAGE_74.png'
        },
        'POTEMKIN': {
            name: 'POTEMKIN',
            sprite: '/images/IMAGE_20.png',
            type: 'power',
            ease: 3,
            description: "A giant walking fortress who can turn the match around with his powerful grabs. He is a soldier from the Independent Airborne State of Zepp. He's a proud man with a loyal heart. His stature makes him come off as intimidating, but he's a gentle man who loves nature. He values duty above all, and while he can tolerate his own pain, he cannot bear to see others hurt. He faces adversity head-on. He refuses to be used as a tool to hurt others for evil.",
            commandList: '/images/IMAGE_75.png'
        },
        'FAUST': {
            name: 'FAUST',
            sprite: '/images/IMAGE_22.png',
            type: 'unique',
            ease: 2,
            description: "A bizarre underground doctor who misleads the opponent with tricky moves. An underground doctor, his past and identity are shrouded in mystery. One moment, he'll blurt out something seemingly random, only to offer a philosophical argument for the future of humanity the next. He once suffered a mental breakdown due to a traumatic experience. Even now, he becomes unstable when something reminds him of that time. At heart, however, he's a caring and kind person with common sense.",
            commandList: '/images/IMAGE_76.png'
        },
        'MILIA RAGE': {
            name: 'MILIA RAGE',
            sprite: '/images/IMAGE_24.png',
            type: 'rushdown',
            ease: 3,
            description: "A wielder of the forbidden art that turns her hair into a weapon---blink and you'll miss her swift movements. She is silent and cold. However, since leaving the Guild, she no longer works only for profit as she once did.  Now that she lives among ordinary people, Millia's come to feel a wider range of emotions.She may not show it in her words or actions, but she's found herself able to sympathize with others. When faced with an uncertain situation, she can even look like a normal girl her age sometimes.",
            commandList: '/images/IMAGE_77.png'
        },
        'ZATO=1': {
            name: 'ZATO=1',
            sprite: '/images/IMAGE_26.png',
            type: 'unique',
            ease: 1,
            description: "A technical shadow wielder who can pressure his opponent with simultaneous attacks. The former leader of the Assassin's Guild, now revived after once experiencing death. Before his resurrection, he was a calm and thoughtful person. However, after all he went through, he ended up unable to feel an emotional response to anything. He no longer finds significance in anything in his life, be it good or bad, nor can he feel joy or anger. The closest he gets to feeling emotion would be his feelings for Millia.",
            commandList: '/images/IMAGE_78.png'
        },
        'RAMLETHAL VALENTINE': {
            name: 'RAMLETHAL VALENTINE',
            sprite: '/images/IMAGE_28.png',
            type: 'balance',
            ease: 1,
            description: " A Brigadier who controls the mid-range with her two swords. She is a \"Valentine,\" a life form created in the image of humanity. In accordance with the orders from her mother implanted in her memories, she declared war against humanity. However, through her interactions with Sol and everyone, she came to know emotion, and eventually became an ally to mankind.",
            commandList: '/images/IMAGE_79.png'
        },
        'LEO WHITEFANG': {
            name: 'LEO WHITEFANG',
            sprite: '/images/IMAGE_30.png',
            type: 'rushdown',
            ease: 3,
            description: " An all-rounder who wields twin swords, turning his back to his opponent as he fights. The Second King of the United Kingdoms of Illyria. He may come off as wild and arrogant, but he's a surprisingly cautious person. He hates losing and holds himself in high esteem. He spares no effort when solving problems. He's made his own personal dictionary, and makes a hobby of defining existing words with actual people and events.",
            commandList: '/images/IMAGE_80.png'
        },
        'NAGORIYUKI': {
            name: 'NAGORIYUKI',
            sprite: '/images/IMAGE_32.png',
            type: 'one shot',
            ease: 2,
            description: " A noble vampire samurai whose vampiric blade delivers devastating blows. A large vampire samurai. His supernatural vampire abilities complement his substantial frame and outstanding fighting skills.",
            commandList: '/images/IMAGE_81.png'
        },
        'GIOVANNA': {
            name: 'GIOVANNA',
            sprite: '/images/IMAGE_34.png',
            type: 'rushdown',
            ease: 4,
            description: "Incredible rush-down that can break through any defense. A super-powered officer from a special forces unit assigned to protect the President of the United States. She's careful with her words, but often comes off as rude and irreverent due to her attitude. Deep down, she means well and is especially friendly with children and animals.",
            commandList: '/images/IMAGE_82.png'
        },
        'ANJI MITO': {
            name: 'ANJI MITO',
            sprite: '/images/IMAGE_36.png',
            type: 'balance',
            ease: 3,
            description: " An elegant martial artist who dodges all with his dance. He's one of the few surviving Japanese people. He can be hot-blooded, acting on his intuition rather than reason. It's easy to recognize his actions as direct and lacking foresight, but he isn't an optimist---he simply isn't very careful. Although he doesn't go out of his way to preach his sense of justice to others, he openly shows his distaste for anything he considers warped or unfair. It may seem at times as if he's making fun of others, but he means it amicably. ",
            commandList: '/images/IMAGE_83.png'
        },
        'I-NO': {
            name: 'I-NO',
            sprite: '/images/IMAGE_38.png',
            type: 'rushdown',
            ease: 2,
            description: " A hard rock witch with a wild offense using her hover dash Her tendency to approach someone as if talking to an old friend can make I-No seem personable at first glance. She doesn't shy away from using her feminine charms to deceive men, despite not actually having it in her to work together with anyone. She sees all others as lesser beings worthy of ridicule, even \"That Man.\" When faced with something or someone she finds irritating or alarming, she reveals her violent temper.",
            commandList: '/images/IMAGE_84.png'
        },
        'GOLDLEWIS DICKINSON': {
            name: 'GOLDLEWIS DICKINSON',
            sprite: '/images/IMAGE_40.png',
            type: 'power',
            ease: 2,
            description: "  Unparalleled Brute Strength THE SECRETARY OF ABSOLUTE DEFENSE Goldlewis is the first-ever Secretary of Defense in the history of the United States who is also an active-duty military officer. With his excellent judgment and ability to lead based on his extensive combat experience, he has garnered immense popularity and earned the trust of those around him. His personal combat prowess is said to be equivalent to the entire White House Security Force, and it is no exaggeration to say that the security and authority of the United States are established due to his presence, making him the mainstay of the nation.",
            commandList: '/images/IMAGE_85.png'
        },
        '\JACK\'O VALENTINE': {
            name: '\JACK\'O VALENTINE',
            sprite: '/images/IMAGE_42.png',
            type: 'unique',
            ease: 1,
            description: "  Dominates The Battle With An Assembly Of Servants HYPER ENERGETIC MARSHAL FIGHTER Jack-O' is an artificial life-form created by Asuka R. Kreutz to prevent the revival of Justice, the herald of destruction. As Justice was created using Aria, Sol's love interest in the past, as a base, Jack-O' managed to prevent Justice's awakening by fusing with Aria's soul within Justice. It was at this time Aria's soul was fully restored within Jack-O'. However, Aria's consciousness has yet to fully manifest, leaving jack-O' in an unstable state where her personality remains unchanged. Although she tries her best to be cool and collected in her demeanor, she tends to act child-like when her emotion gets the best of her. For that reason, she wears a special mask to keep her composure during battle.",
            commandList: '/images/IMAGE_86.png'
        },
        'HAPPY CHAOS': {
            name: 'HAPPY CHAOS',
            sprite: '/images/IMAGE_44.png',
            type: 'shooting',
            ease: 1,
            description: " Restorer of Humanity Gunslinging Broken Messiah He is the Original, who first discovered the Backyard and taught humanity about magic. After absorbing half of I-No, he suddenly changed drastically. He now carries within himself all of humanity's hope towards living. He feels that his existence will be forgiven by a greater will when humankind loses their humanity. The concepts of good and evil are of equal value to him. He may cause major incidents, but he could also end up on the side of justice.",
            commandList: '/images/IMAGE_87.png'
        },
        'BAIKEN': {
            name: 'BAIKEN',
            sprite: '/images/IMAGE_46.png',
            type: 'balance',
            ease: 5,
            description: " Wielding her opponent's strength as her own THE UNFALTERING AWAKENED SAMURAI A swordswoman of Japanese descent. She gets heated easily and is quick to start a fight. She's the type to jump to action before thinking things through. She sticks to her principles, and doesn't back down from a disagreement until it's settled. However, she can still acknowledge when the other party is in the right. Her right arm has an attached concealed weapon as well as an artificial arm modified for offense. She has sworn to take revenge on That Man after suffering a serious wound and losing her friends and family in the Crusades.",
            commandList: '/images/IMAGE_88.png'
        },
        'TESTAMENT': {
            name: 'TESTAMENT',
            sprite: '/images/IMAGE_48.png',
            type: 'zoning',
            ease: 4,
            description: " Crimson scythe swaying in an enchanting dance Elegant Grim Reaper Testament was once human, before being surgically modified into a Gear. Under the control of the Conclave, they worked to revive Justice. After the events of the Second Holy Order Selection Tournament, however, they regained their sense of self. Feeling guilty, they hid in the Forest of Demons, before resolving to protect the half-Gear Dizzy from the humans who pursued her. Although this began as a way to atone for their sins, it ended up bringing back their human sensibility. They now live with the elderly couple who once took care of Dizzy. This new life has brought them peace of mind, and they now enjoy their share of happiness.",
            commandList: '/images/IMAGE_89.png'
        },
        'BRIDGET': {
            name: 'BRIDGET',
            sprite: '/images/IMAGE_50.png',
            type: 'balance',
            ease: 4,
            description: " Flying Unrestrained with Yo-yo Mastery Free-form Tricky Spinner Bridget was born one of two twin sons of a multi-billionaire couple and was given only the best training and tutoring as a child. However, Bridget's upbringing was what one would expect for a daughter of a high-society family instead of a son. There was a reason for this: Bridget's hometown had a superstitious belief that male twins brought misfortune. The townspeople were so embedded in this belief that they insisted the younger of any set of male twins be put to death or be exiled from the town upon birth. Unable to swallow either of the options, the twins' parents raised Bridget as a daughter. While Bridget strove to put on a happy front, these efforts only seemed to cause Bridget's parents more pain. Bridget began to think that behaving like a man and bringing home a vast array of riches would prove that the superstitions were unfounded. Although unsuccessful in capturing Dizzy for her bounty, Bridget showed talent as a bounty hunter and managed to bring home great wealth. This led to the village superstition fading, but it also left Bridget without a goal. Bridget now works as a bounty hunter while searching for a purpose.",
            commandList: '/images/IMAGE_90.png'
        },
        'SIN KISKE': {
            name: 'SIN KISKE',
            sprite: '/images/IMAGE_52.png',
            type: 'balance',
            ease: 4,
            description: " Chasing down his prey with his far-reaching flag Ever-growing wild boy He is the child of Ky Kiske, Allied King of Illyria, and Dizzy, a half-Gear, making him one-quarter Gear. Ky entrusted him to Sol as a child to avoid unwanted attention due to his incredible rate of growth caused by his Gear blood. Sol’s education leaned a bit too far into survival (self-admittedly), leading to Sin now being strong but mischievous and somewhat lacking in the academic department. Despite his looks, he’s actually not even ten years old yet, and is still rather immature mentally. He’s optimistic and doesn’t think too deeply about things. He could be called clueless at worst, and innocent at best. His simplistic thinking, however, can lead to a breakthrough in handling situations at times.",
            commandList: '/images/IMAGE_91.png'
        },
        'BEDMAN?': {
            name: 'BEDMAN?',
            sprite: '/images/IMAGE_54.png',
            type: 'unique',
            ease: 2,
            description: "  Fighting heedless of its own destruction Error-prone guardian machine The bed can continue to act independently after Bedman’s death due to the program he entered in his last moments. Delilah recovers it after it plays a part in stopping her when she loses control. It mainly takes action to protect Delilah. Although capable of simple communication, complex conversation taking the other party into consideration and storage of daily memories is out of the scope of its abilities. Delilah: Bedman’s sister. She has the same unique condition as her brother, and has been able to live only through dreams due to her incredible cognitive abilities. However, she descends into the real world through the Absolute World created by Bedman in his dying moments. Her true capabilities are restricted as a means to keep her body anchored in reality (something Delilah herself is unaware of). Her brother’s bed is always at her side, protecting her (sometimes going overboard in doing so). Although she possesses incredible power and unparalleled cognitive abilities, she’s well aware that she lacks an understanding of current events and the subtleties of others’ emotions. She also realizes she is lacking in experience communicating with others, but she finds herself frustrated at her own child-like emotions despite them being natural for her age.",
            commandList: '/images/IMAGE_92.png'
        },
        'ASUKA R#': {
            name: 'ASUKA R#',
            sprite: '/images/IMAGE_56.png',
            type: 'unique',
            ease: 1,
            description: " Praying for the Accumulation of Goodwill Master of sorcery He stands at the pinnacle even among the company of generally highly capable magic wielders. He is both a scientist and also unparalleled in his mastery of magic – what one would call a genius.  Although he is generally polite and humble, he often finds even his carefully considered statements can result in discord.  In contrast to his intellectual capabilities, he severely lacks in stamina, with the slightest exercise tiring him out. Any physically straining tasks are handled by custom-made bits of his.  Asuka continues to transmit “clear numbers” from space, in the hopes of bringing peace to Earth.",
            commandList: '/images/IMAGE_93.png'
        },
        'JOHNNY': {
            name: 'JOHNNY',
            sprite: '/images/IMAGE_58.png',
            type: 'zoning',
            ease: 3,
            description: " Severs all with an unseen strike Natural-born gambler Leader of the Jellyfish Pirates. He is a master of the Hirofumi Style of swordsmanship. He's a world-class outlaw but lives by the mantra, \"Help the weak and sprain the strong,\" which has made him popular among the masses. Johnny is an easy-going guy who's always ready to kick back, but when the going gets tough, he's undoubtedly the man for the job. No matter how grim the situation, he never loses his cool and is often there to break the tension with a clever joke. He rescues children orphaned from war (women only) and brings them aboard his ship. He loves the members of the Jellyfish Pirates like his own family and has often told them he puts their safety before his own life.", 
            commandList: '/images/IMAGE_94.png'
        },
        'ELPHELT VALENTINE': {
            name: 'ELPHELT VALENTINEY',
            sprite: '/images/IMAGE_60.png',
            type: 'rushdown',
            ease: 5,
            description: "  Ignite the drive within your soul Sweet daydream bullet train Elphelt is one of the Valentines created by the Universal Will. She loves animals and nature and can't bear to see anyone alone. She will charge into any problem head-first, shielded by impenetrable optimism. After the battle with the Universal Will, she takes on a position within Illyria Castle, but isn't able to keep up well with the work. Although no one blames her for making mistakes, this very fact weighs on Elphelt, and she runs off. What can she do to bring smiles to people's faces? Elphelt finds the answer to her quandary in the form of a microphone. Her band Speothos Venaticus is active on the scene to this day.",
            commandList: '/images/IMAGE_96.png'
        },
        'A.B.A': {
            name: 'A.B.A',
            sprite: '/images/IMAGE_62.png',
            type: 'unique',
            ease: 2,
            description: " All-consuming flame of jealousy Lovingly latched-on homunculus A homunculus born in a laboratory called Flask. She’s given the name Paracelsus to an axe closely resembling a key, and treats him as her husband.  Due to her solitary upbringing in the laboratory, she is extremely shy around new people. She’s still emotionally immature, and shows a deeply jealous and possessive side when it comes to Paracelsus. She may come off as belligerent, but this is only to cover for her timidity. She maintains a base level of consideration and sympathy for others. She first sets out on a journey to find a human body for her spouse, Paracelsus. Now, concerned about the recent changes to his appearance, she is investigating the cause of his transformation. A.B.A’s weapon as well as husband (according to her). In actuality, he is a magical battle axe named Flament Nagel. His brainwashing has led many warriors to their deaths on the battlefield during the Crusades. His thirst for violence would drive his wielder to fight until their bloody end, with no distinction between friend or foe. After the Crusades, he encounters A.B.A, accompanying her despite a seeming distaste for her constant advances. Throughout their time together, he has begun to change shape from an axe into a key. A.B.A has yet to notice the change in heart he’s experienced along with this transformation. While he’s grown accustomed to life outside of the battlefield, oddly enough he sometimes finds himself losing hold of his shape…?",
            commandList: '/images/IMAGE_98.png'
        },
        'SLAYER': {
            name: 'SLAYER',
            sprite: '/images/IMAGE_64.png',
            type: 'power',
            ease: 3,
            description: " His dukes define dandyism Laid-back and dignified vampire A gentlemanly descendent of vampiric lineage, who enjoys genuine combat and haiku as hobbies. He abides by his own code of “dandyism” and can take nearly anything in stride. When it comes to battle, however, he wields overwhelming strength in great contrast to his calm demeanor. Due to his lifespan as a vampire, all events in human society feel trivial to him. That’s only one facet of him, however, as he finds humans and their turbulent emotions in response to such affairs both enviable and endearing. He founded the Assassin’s Guild, only to retire after meeting his immortal wife, Sharon. Currently, he enjoys an untroubled life in retirement with Sharon, occasionally venturing out for some people watching. ",
            commandList: '/images/IMAGE_99.png'
        },
        'QUEEN DIZZY': {
            name: 'QUEEN DIZZY',
            sprite: '/images/IMAGE_66.png',
            type: 'unique',
            ease: 3,
            description: " Luminous wings guiding the path Queen of compassion in full bloom A half-Gear born between a Gear and a human. Although she once distrusted humans, meeting many kind people gradually helps her overcome those feelings. Sincere and pure at heart, she loves nature and humanity, despising conflict. For a time she lives in hiding in the Forest of Demons after an elderly human couple takes her in. Johnny then asks her to join the Jellyfish Pirates, where she is welcomed warmly. During this new peaceful life, she meets Ky Kiske, a director of the International Police Force at the time, and falls in love. She eventually bears him a son, Sin. Later, she is sealed away in slumber to escape an enemy attack and subsequently freed during the Cradle incident. After Ky steps down from his position as Allied King of Illyria, Dizzy now rules the new kingdom Vialattea together with him. Although still growing accustomed to her official duties, she finds each day fulfilling.",
            commandList: '/images/IMAGE_100.png'
        },
        'VENOM': {
            name: 'VENOM',
            sprite: '/images/IMAGE_68.png',
            type: 'zoning',
            ease: 1,
            description: " Unrelenting Pursuer in the Dark of Night Deep Purple Billiard Phantom He is a gentle and honest man who can barely bring himself to lie. There is a rigidity to his speech that suggests he favors reason above all else, but in fact, he places high importance on emotion, empathy, and humility. During the battle with Bedman, the leader of the Assassin’s Guild Venom dies–to the outside world, at least. After Robo-Ky saves his life, he attempts to fund his repairs by taking any work he can get, until Zato gifts him ownership of the store where he opens his bakery. Through his new life as a baker, Venom learns of a new and unfamiliar “battle.” He grows fond of the townspeople who fight not to take the lives of others but for their own pride, and swears to protect their “battlefield.” And so begins his new battle: baker by day, mysterious punisher “Phantom” by night.",
            commandList: '/images/IMAGE_101.png'
        },
        'UNIKA': {
            name: 'UNIKA',
            sprite: '/images/IMAGE_124.png',
            type: 'balance',
            ease: 5,
            description: " Untarnished resounding thunderclap Trick weapon wielding super rookie A girl from the future after the destruction of the Second Crusades. Daughter of Ky and Dizzy, she inherits Gear blood like her brother Sin. In the ruined future, Nerville discovers her while still inside her egg and raises her to faithfully follow his orders. She travels to the past from the future where mankind is on the brink of extinction, convinced by Nerville that this is how to save the world, and engages Sol and the others in combat. Her feelings begin to waver after meeting Sin and Bridget, leading to her parting ways with Nerville. She teams up with Sin and the others to thwart Nerville’s attempted invasion. Aware that her origins left her unfamiliar with the world and humanity, Unika sets off on a journey under supervision of the United States. Through her many encounters with others during her travels, she learns of peace and herself. She decides to use her power to ensure people like her future self do not come to be. After a long journey, she refuses the offer to stay with her family in Vialattea and instead ends up working as Presidential Bodyguard Trainee. She is allowed to handle missions on her own, although the United States constantly tracks her using magic",
            commandList: '/images/IMAGE_125.png'
        },
    };
    // Get elements from the HTML
    // DOM Elements
    const characterCards = document.querySelectorAll('.character-card');
    const popupOverlay = document.getElementById('character-popup-overlay');
    const characterPopup = document.getElementById('character-popup');
    const popupClose = document.getElementById('popup-close');
    const popupCharacterName = document.getElementById('popup-character-name');
    const popupSprite = document.getElementById('popup-sprite');
    const popupType = document.getElementById('popup-type'); 
    const popupEase = document.getElementById('popup-ease');
    const popupDescription = document.getElementById('popup-description');
    const commandListBtn = document.getElementById('command-list-btn');
    
    // Command List Elements
    const commandListOverlay = document.getElementById('command-list-overlay');
    const commandListModal = document.getElementById('command-list-modal');
    const commandListTitle = document.getElementById('command-list-title');
    const commandListImg = document.getElementById('command-list-img');
    const commandListClose = document.getElementById('command-list-close');
    const backToCharacterBtn = document.getElementById('back-to-character');

    // This will hold the current character being viewed
    let currentCharacter = null;

    // Show the character pop-up with the character's info
    function openCharacterPopup(characterName) {
        // Get the character info, or use a default if not found
        const character = characterData[characterName] || {
            name: characterName,
            sprite: '/images/placeholder.png',
            type: 'balance',
            ease: 3,
            description: 'No detailed information available for this character yet.',
            commandList: '/images/placeholder_commands.png'
        };

        currentCharacter = character;

        // Fill in all the pop-up content with the character's data
        popupCharacterName.textContent = character.name;
        popupSprite.src = character.sprite;
        popupSprite.alt = character.name;

        // Format and show the battle type
        popupType.textContent = character.type.charAt(0).toUpperCase() + character.type.slice(1);
        popupType.className = 'character-type-badge ' + character.type;

        // Fill in stars based on ease of use
        const stars = popupEase.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < character.ease) {
                star.classList.add('filled'); // show filled star
            } else {
                star.classList.remove('filled'); // show empty star
            }
        });

        // Show description text
        popupDescription.textContent = character.description;

        // Show the pop-up on screen
        popupOverlay.classList.add('active');

        // Stop the background from scrolling
        document.body.style.overflow = 'hidden';
    }

    // Close the character pop-up and reset scroll
    function closeCharacterPopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open the character's command list
    function openCommandList() {
        if (!currentCharacter) return;

        // Fill in the modal with the right content
        commandListTitle.textContent = `${currentCharacter.name} - COMMAND LIST`;
        commandListImg.src = currentCharacter.commandList;
        commandListImg.alt = `${currentCharacter.name} Command List`;

        // Show the modal
        commandListOverlay.classList.add('active');
    }

    // Close the command list modal
    function closeCommandList() {
        commandListOverlay.classList.remove('active');
    }

    // When a character card is clicked, open the pop-up
    characterCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const characterName = card.querySelector('.character-name').textContent;
            openCharacterPopup(characterName);
            e.stopPropagation(); // stop the click from triggering other events
        });
    });

    // Click on (X) to close pop-up
    popupClose.addEventListener('click', closeCharacterPopup);

    // Click outside the pop-up to close it
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closeCharacterPopup();
        }
    });

    // Open command list when button is clicked
    commandListBtn.addEventListener('click', openCommandList);

    // Click on (X) in command list to close it
    commandListClose.addEventListener('click', closeCommandList);

    // Click "back" to return to character info
    backToCharacterBtn.addEventListener('click', closeCommandList);

    // Click outside the command list box to close it
    commandListOverlay.addEventListener('click', (e) => {
        if (e.target === commandListOverlay) {
            closeCommandList();
        }
    });

    // Pressing Escape closes either pop-up if it's open
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (commandListOverlay.classList.contains('active')) {
                closeCommandList();
            } else if (popupOverlay.classList.contains('active')) {
                closeCharacterPopup();
            }
        }
    });
});