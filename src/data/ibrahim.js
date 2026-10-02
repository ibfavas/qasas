/* ibrahim chapter data: Ibrahim (AS), Chapter VI.
   Follows the locked Adam chapter template: scene-by-scene storybook,
   verse panels (Arabic + Saheeh International), labeled Hadith panels with
   Sunnah.com links, lessons, verse-grounded quiz, and a sources note.
   Scenes follow the chronological order of events as the Quran tells them. */
export const chapter = {
  "hero": {
    "plaque": "Chapter VI",
    "title": "Ibrahim (AS): The Friend of Allah",
    "sub": "From the house of idols to the fire that became coolness, from the raising of the House to the dream and the ransom: the story of the Friend of Allah, as the Quran tells it.",
    "img": "../assets/ibrahim-night.webp",
    "imgAlt": "A boundless desert night sky filled with stars above silent dunes",
    "caption": "The night he searched the heavens: “When the night covered him with darkness, he saw a star.” (Quran 6:76)"
  },
  "railLabels": [
    "A House of Idols",
    "The Star, the Moon, and the Sun",
    "The Smashing of the Idols",
    "Have You Done This to Our Gods?",
    "O Fire, Be Coolness",
    "The King Who Claimed Divinity",
    "The Emigration",
    "The Honored Guests",
    "How He Gives Life to the Dead",
    "The Raising of the Foundations",
    "The Dream and the Great Sacrifice",
    "The Father of Nations"
  ],
  "scenes": [
    {
      "id": "scene-1",
      "ariaLabel": "Scene 1: A House of Idols",
      "title": "A House of Idols",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 1 of 12"
        },
        {
          "t": "h2",
          "html": "A House of Idols"
        },
        {
          "t": "p",
          "html": "Ibrahim was born into a house of idols; the Quran names his father Azar. Yet the same Quran introduces the son with honor: a man of truth and a prophet. A son of an idolater, chosen for truth. His first recorded words to his father are gentle, not mocking: &ldquo;O my father, why do you worship that which does not hear and does not see and will not benefit you at all?&rdquo; The idols could not hear the question. Ibrahim could not stop asking it.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 6:74",
          "arabic": " ۞ وَإِذْ قَالَ إِبْرَٰهِيمُ لِأَبِيهِ ءَازَرَ أَتَتَّخِذُ أَصْنَامًا ءَالِهَةً ۖ إِنِّىٓ أَرَىٰكَ وَقَوْمَكَ فِى ضَلَـٰلٍ مُّبِينٍ",
          "translation": "And [mention, O Muḥammad], when Abraham said to his father Āzar, \"Do you take idols as deities? Indeed, I see you and your people to be in manifest error.\"",
          "citation": "Surah 6 &middot; Verse 74 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:41",
          "arabic": " وَٱذْكُرْ فِى ٱلْكِتَـٰبِ إِبْرَٰهِيمَ ۚ إِنَّهُۥ كَانَ صِدِّيقًا نَّبِيًّا",
          "translation": "And mention in the Book [the story of] Abraham. Indeed, he was a man of truth and a prophet.",
          "citation": "Surah 19 &middot; Verse 41 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:42",
          "arabic": " إِذْ قَالَ لِأَبِيهِ يَـٰٓأَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ وَلَا يُغْنِى عَنكَ شَيْـًٔا",
          "translation": "[Mention] when he said to his father, \"O my father, why do you worship that which does not hear and does not see and will not benefit you at all?",
          "citation": "Surah 19 &middot; Verse 42 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-2",
      "ariaLabel": "Scene 2: The Star, the Moon, and the Sun",
      "title": "The Star, the Moon, and the Sun",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 2 of 12"
        },
        {
          "t": "h2",
          "html": "The Star, the Moon, and the Sun"
        },
        {
          "t": "p",
          "html": "Before he debated his people, the Quran shows Ibrahim alone under the open sky, reasoning his way to Allah. Night fell, and he saw a star. This is my lord, he said. But when it set, he said: &ldquo;I like not those that set.&rdquo; The moon rose, brighter than the star. This is my lord. It set as well. Then the sun, greatest of all: this is my lord, this is greater. And it set like the rest. Then the conclusion, words the Muslims still pray with: &ldquo;Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.&rdquo;",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 6:75",
          "arabic": " وَكَذَٰلِكَ نُرِىٓ إِبْرَٰهِيمَ مَلَكُوتَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَلِيَكُونَ مِنَ ٱلْمُوقِنِينَ",
          "translation": "And thus did We show Abraham the realm of the heavens and the earth that he would be among the certain [in faith].",
          "citation": "Surah 6 &middot; Verse 75 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 6:76-79",
          "arabic": " فَلَمَّا جَنَّ عَلَيْهِ ٱلَّيْلُ رَءَا كَوْكَبًا ۖ قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلْـَٔافِلِينَ فَلَمَّا رَءَا ٱلْقَمَرَ بَازِغًا قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَئِن لَّمْ يَهْدِنِى رَبِّى لَأَكُونَنَّ مِنَ ٱلْقَوْمِ ٱلضَّآلِّينَ فَلَمَّا رَءَا ٱلشَّمْسَ بَازِغَةً قَالَ هَـٰذَا رَبِّى هَـٰذَآ أَكْبَرُ ۖ فَلَمَّآ أَفَلَتْ قَالَ يَـٰقَوْمِ إِنِّى بَرِىٓءٌ مِّمَّا تُشْرِكُونَ إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ حَنِيفًا ۖ وَمَآ أَنَا۠ مِنَ ٱلْمُشْرِكِينَ",
          "translation": "So when the night covered him [with darkness], he saw a star. He said, \"This is my lord.\" But when it set, he said, \"I like not those that set [i.e., disappear].\" And when he saw the moon rising, he said, \"This is my lord.\" But when it set, he said, \"Unless my Lord guides me, I will surely be among the people gone astray.\" And when he saw the sun rising, he said, \"This is my lord; this is greater.\" But when it set, he said, \"O my people, indeed I am free from what you associate with Allāh. Indeed, I have turned my face [i.e., self] toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allāh.\"",
          "citation": "Surah 6 &middot; Verses 76-79 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-3",
      "ariaLabel": "Scene 3: The Smashing of the Idols",
      "title": "The Smashing of the Idols",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 3 of 12"
        },
        {
          "t": "h2",
          "html": "The Smashing of the Idols"
        },
        {
          "t": "p",
          "html": "&ldquo;What are these statues to which you are devoted?&rdquo; That was his question to his father and his people, and their answer was custom: we found our fathers worshipping them. Custom is not proof. So Ibrahim swore an oath over their gods, that he would plan against their idols once they had turned and gone away. When the town emptied for its festival, he entered and made them into fragments, except the largest, that they might return to it and question. One idol stood whole among the ruins. The argument was about to make itself.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 21:52-53",
          "arabic": " إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِۦ مَا هَـٰذِهِ ٱلتَّمَاثِيلُ ٱلَّتِىٓ أَنتُمْ لَهَا عَـٰكِفُونَ قَالُوا۟ وَجَدْنَآ ءَابَآءَنَا لَهَا عَـٰبِدِينَ",
          "translation": "When he said to his father and his people, \"What are these statues to which you are devoted?\" They said, \"We found our fathers worshippers of them.\"",
          "citation": "Surah 21 &middot; Verses 52-53 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 21:57-58",
          "arabic": " وَتَٱللَّهِ لَأَكِيدَنَّ أَصْنَـٰمَكُم بَعْدَ أَن تُوَلُّوا۟ مُدْبِرِينَ فَجَعَلَهُمْ جُذَٰذًا إِلَّا كَبِيرًا لَّهُمْ لَعَلَّهُمْ إِلَيْهِ يَرْجِعُونَ",
          "translation": "And [I swear] by Allāh, I will surely plan against your idols after you have turned and gone away.\" So he made them into fragments, except a large one among them, that they might return to it [and question].",
          "citation": "Surah 21 &middot; Verses 57-58 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-4",
      "ariaLabel": "Scene 4: Have You Done This to Our Gods?",
      "title": "Have You Done This to Our Gods?",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 4 of 12"
        },
        {
          "t": "h2",
          "html": "Have You Done This to Our Gods?"
        },
        {
          "t": "p",
          "html": "They returned to wreckage. Who has done this to our gods? Suspicion fell on the young man who had argued against them, and they dragged him before the crowd: &ldquo;Have you done this to our gods, O Abraham?&rdquo; His answer turned their own logic into a blade: &ldquo;Rather, this, the largest of them, did it, so ask them, if they should [be able to] speak.&rdquo; They knew the idols could not speak. Then do you worship, instead of Allah, what can neither benefit nor harm you? They had no answer left but force.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 21:59",
          "arabic": " قَالُوا۟ مَن فَعَلَ هَـٰذَا بِـَٔالِهَتِنَآ إِنَّهُۥ لَمِنَ ٱلظَّـٰلِمِينَ",
          "translation": "They said, \"Who has done this to our gods? Indeed, he is of the wrongdoers.\"",
          "citation": "Surah 21 &middot; Verse 59 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 21:62-63",
          "arabic": " قَالُوٓا۟ ءَأَنتَ فَعَلْتَ هَـٰذَا بِـَٔالِهَتِنَا يَـٰٓإِبْرَٰهِيمُ قَالَ بَلْ فَعَلَهُۥ كَبِيرُهُمْ هَـٰذَا فَسْـَٔلُوهُمْ إِن كَانُوا۟ يَنطِقُونَ",
          "translation": "They said, \"Have you done this to our gods, O Abraham?\" He said, \"Rather, this - the largest of them - did it, so ask them, if they should [be able to] speak.\"",
          "citation": "Surah 21 &middot; Verses 62-63 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 21:66-67",
          "arabic": " قَالَ أَفَتَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكُمْ شَيْـًٔا وَلَا يَضُرُّكُمْ أُفٍّ لَّكُمْ وَلِمَا تَعْبُدُونَ مِن دُونِ ٱللَّهِ ۖ أَفَلَا تَعْقِلُونَ",
          "translation": "He said, \"Then do you worship instead of Allāh that which does not benefit you at all or harm you? Uff to you and to what you worship instead of Allāh. Then will you not use reason?\"",
          "citation": "Surah 21 &middot; Verses 66-67 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-5",
      "ariaLabel": "Scene 5: O Fire, Be Coolness",
      "title": "O Fire, Be Coolness",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 5 of 12"
        },
        {
          "t": "h2",
          "html": "O Fire, Be Coolness"
        },
        {
          "t": "p",
          "html": "Burn him, they said, and support your gods. Elsewhere the Quran gives their verdict in fewer words: kill him or burn him. They built the fire, a furnace, and threw him in. And then the words that undo every tyrant&rsquo;s arithmetic: &ldquo;O fire, be coolness and safety upon Abraham.&rdquo; The fire meant to consume him became his shelter, and they became the greatest losers. Allah saved him from the fire, and in that are signs for a people who believe.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 21:68-70",
          "arabic": " قَالُوا۟ حَرِّقُوهُ وَٱنصُرُوٓا۟ ءَالِهَتَكُمْ إِن كُنتُمْ فَـٰعِلِينَ قُلْنَا يَـٰنَارُ كُونِى بَرْدًا وَسَلَـٰمًا عَلَىٰٓ إِبْرَٰهِيمَ وَأَرَادُوا۟ بِهِۦ كَيْدًا فَجَعَلْنَـٰهُمُ ٱلْأَخْسَرِينَ",
          "translation": "They said, \"Burn him and support your gods - if you are to act.\" We [i.e., Allāh] said, \"O fire, be coolness and safety upon Abraham.\" And they intended for him a plan [i.e., harm], but We made them the greatest losers.",
          "citation": "Surah 21 &middot; Verses 68-70 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 29:24",
          "arabic": " فَمَا كَانَ جَوَابَ قَوْمِهِۦٓ إِلَّآ أَن قَالُوا۟ ٱقْتُلُوهُ أَوْ حَرِّقُوهُ فَأَنجَىٰهُ ٱللَّهُ مِنَ ٱلنَّارِ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍ لِّقَوْمٍ يُؤْمِنُونَ",
          "translation": "And the answer of his [i.e., Abraham's] people was not but that they said, \"Kill him or burn him,\" but Allāh saved him from the fire. Indeed in that are signs for a people who believe.",
          "citation": "Surah 29 &middot; Verse 24 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 37:97",
          "arabic": " قَالُوا۟ ٱبْنُوا۟ لَهُۥ بُنْيَـٰنًا فَأَلْقُوهُ فِى ٱلْجَحِيمِ",
          "translation": "They said, \"Construct for him a structure [i.e., furnace] and throw him into the burning fire.\"",
          "citation": "Surah 37 &middot; Verse 97 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-6",
      "ariaLabel": "Scene 6: The King Who Claimed Divinity",
      "title": "The King Who Claimed Divinity",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 6 of 12"
        },
        {
          "t": "h2",
          "html": "The King Who Claimed Divinity"
        },
        {
          "t": "p",
          "html": "Power itself was next to argue. A king to whom Allah had given kingship disputed with Ibrahim about his Lord. My Lord gives life and causes death, Ibrahim said. I give life and cause death, the king answered, confusing a pardon with creation. Ibrahim gave him a sign no throne could counterfeit: &ldquo;Indeed, Allah brings up the sun from the east, so bring it up from the west.&rdquo; The king was silenced on the spot.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 2:258",
          "arabic": " أَلَمْ تَرَ إِلَى ٱلَّذِى حَآجَّ إِبْرَٰهِـۧمَ فِى رَبِّهِۦٓ أَنْ ءَاتَىٰهُ ٱللَّهُ ٱلْمُلْكَ إِذْ قَالَ إِبْرَٰهِـۧمُ رَبِّىَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ قَالَ أَنَا۠ أُحْىِۦ وَأُمِيتُ ۖ قَالَ إِبْرَٰهِـۧمُ فَإِنَّ ٱللَّهَ يَأْتِى بِٱلشَّمْسِ مِنَ ٱلْمَشْرِقِ فَأْتِ بِهَا مِنَ ٱلْمَغْرِبِ فَبُهِتَ ٱلَّذِى كَفَرَ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّـٰلِمِينَ",
          "translation": "Have you not considered the one who argued with Abraham about his Lord [merely] because Allāh had given him kingship? When Abraham said, \"My Lord is the one who gives life and causes death,\" he said, \"I give life and cause death.\" Abraham said, \"Indeed, Allāh brings up the sun from the east, so bring it up from the west.\" So the disbeliever was overwhelmed [by astonishment], and Allāh does not guide the wrongdoing people.",
          "citation": "Surah 2 &middot; Verse 258 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-7",
      "ariaLabel": "Scene 7: The Emigration",
      "title": "The Emigration",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 7 of 12"
        },
        {
          "t": "h2",
          "html": "The Emigration"
        },
        {
          "t": "p",
          "html": "He could not remain among them. Allah delivered him and Lut to the land He had blessed. Lut believed in him, and Ibrahim spoke the words of every emigrant for Allah&rsquo;s sake: &ldquo;Indeed, I will emigrate to [the service of] my Lord.&rdquo;",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 21:71",
          "arabic": " وَنَجَّيْنَـٰهُ وَلُوطًا إِلَى ٱلْأَرْضِ ٱلَّتِى بَـٰرَكْنَا فِيهَا لِلْعَـٰلَمِينَ",
          "translation": "And We delivered him and Lot to the land which We had blessed for the worlds [i.e., peoples].",
          "citation": "Surah 21 &middot; Verse 71 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 29:26",
          "arabic": " ۞ فَـَٔامَنَ لَهُۥ لُوطٌ ۘ وَقَالَ إِنِّى مُهَاجِرٌ إِلَىٰ رَبِّىٓ ۖ إِنَّهُۥ هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
          "translation": "And Lot believed him. [Abraham] said, \"Indeed, I will emigrate to [the service of] my Lord. Indeed, He is the Exalted in Might, the Wise.\"",
          "citation": "Surah 29 &middot; Verse 26 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-8",
      "ariaLabel": "Scene 8: The Honored Guests",
      "title": "The Honored Guests",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 8 of 12"
        },
        {
          "t": "h2",
          "html": "The Honored Guests"
        },
        {
          "t": "p",
          "html": "In his new land, honored guests came to his door. Angels, though he did not know it yet, and he hurried to bring them a roasted calf. But their hands did not reach for the food, and fear entered his heart, until they said: fear not, we have been sent to the people of Lot. Then the tidings his household had waited a lifetime for: his wife was standing, and she smiled. Allah gave them good tidings of Isaac, and after Isaac, Jacob. She cried out in disbelief: &ldquo;Woe to me! Shall I give birth while I am an old woman and this, my husband, is an old man?&rdquo; Are you amazed at the decree of Allah, they said. The mercy of Allah and His blessings upon you, people of the house.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 11:69-70",
          "arabic": " وَلَقَدْ جَآءَتْ رُسُلُنَآ إِبْرَٰهِيمَ بِٱلْبُشْرَىٰ قَالُوا۟ سَلَـٰمًا ۖ قَالَ سَلَـٰمٌ ۖ فَمَا لَبِثَ أَن جَآءَ بِعِجْلٍ حَنِيذٍ فَلَمَّا رَءَآ أَيْدِيَهُمْ لَا تَصِلُ إِلَيْهِ نَكِرَهُمْ وَأَوْجَسَ مِنْهُمْ خِيفَةً ۚ قَالُوا۟ لَا تَخَفْ إِنَّآ أُرْسِلْنَآ إِلَىٰ قَوْمِ لُوطٍ",
          "translation": "And certainly did Our messengers [i.e., angels] come to Abraham with good tidings; they said, \"Peace.\" He said, \"Peace,\" and did not delay in bringing [them] a roasted calf. But when he saw their hands not reaching for it, he distrusted them and felt from them apprehension. They said, \"Fear not. We have been sent to the people of Lot.\"",
          "citation": "Surah 11 &middot; Verses 69-70 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 11:71-73",
          "arabic": " وَٱمْرَأَتُهُۥ قَآئِمَةٌ فَضَحِكَتْ فَبَشَّرْنَـٰهَا بِإِسْحَـٰقَ وَمِن وَرَآءِ إِسْحَـٰقَ يَعْقُوبَ قَالَتْ يَـٰوَيْلَتَىٰٓ ءَأَلِدُ وَأَنَا۠ عَجُوزٌ وَهَـٰذَا بَعْلِى شَيْخًا ۖ إِنَّ هَـٰذَا لَشَىْءٌ عَجِيبٌ قَالُوٓا۟ أَتَعْجَبِينَ مِنْ أَمْرِ ٱللَّهِ ۖ رَحْمَتُ ٱللَّهِ وَبَرَكَـٰتُهُۥ عَلَيْكُمْ أَهْلَ ٱلْبَيْتِ ۚ إِنَّهُۥ حَمِيدٌ مَّجِيدٌ",
          "translation": "And his wife was standing, and she smiled. Then We gave her good tidings of Isaac and after Isaac, Jacob. She said, \"Woe to me! Shall I give birth while I am an old woman and this, my husband, is an old man? Indeed, this is an amazing thing!\" They said, \"Are you amazed at the decree of Allāh? May the mercy of Allāh and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable.\"",
          "citation": "Surah 11 &middot; Verses 71-73 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-9",
      "ariaLabel": "Scene 9: How He Gives Life to the Dead",
      "title": "How He Gives Life to the Dead",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 9 of 12"
        },
        {
          "t": "h2",
          "html": "How He Gives Life to the Dead"
        },
        {
          "t": "p",
          "html": "His faith was certain, yet his heart wanted witnessing. &ldquo;My Lord, show me how You give life to the dead.&rdquo; Have you not believed? Allah asked. Yes, he said, but only that my heart may be satisfied. Then the command: take four birds, place a portion of them on each hill, then call them, and they will come flying to you in haste. He called, and they came. Certainty, witnessed.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 2:260",
          "arabic": " وَإِذْ قَالَ إِبْرَٰهِـۧمُ رَبِّ أَرِنِى كَيْفَ تُحْىِ ٱلْمَوْتَىٰ ۖ قَالَ أَوَلَمْ تُؤْمِن ۖ قَالَ بَلَىٰ وَلَـٰكِن لِّيَطْمَئِنَّ قَلْبِى ۖ قَالَ فَخُذْ أَرْبَعَةً مِّنَ ٱلطَّيْرِ فَصُرْهُنَّ إِلَيْكَ ثُمَّ ٱجْعَلْ عَلَىٰ كُلِّ جَبَلٍ مِّنْهُنَّ جُزْءًا ثُمَّ ٱدْعُهُنَّ يَأْتِينَكَ سَعْيًا ۚ وَٱعْلَمْ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ",
          "translation": "And [mention] when Abraham said, \"My Lord, show me how You give life to the dead.\" [Allāh] said, \"Have you not believed?\" He said, \"Yes, but [I ask] only that my heart may be satisfied.\" [Allāh] said, \"Take four birds and commit them to yourself. Then [after slaughtering them] put on each hill a portion of them; then call them - they will come [flying] to you in haste. And know that Allāh is Exalted in Might and Wise.\"",
          "citation": "Surah 2 &middot; Verse 260 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-10",
      "ariaLabel": "Scene 10: The Raising of the Foundations",
      "title": "The Raising of the Foundations",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 10 of 12"
        },
        {
          "t": "h2",
          "html": "The Raising of the Foundations"
        },
        {
          "t": "p",
          "html": "Allah tried Ibrahim with commands, and he fulfilled them, and the reward was a station given to no other: a leader for the people. His greatest work was the House. With his son Ismail he raised its foundations, and as they built they prayed: &ldquo;Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.&rdquo; Make us Muslims, they prayed, and from our descendants a Muslim nation, and send among them a messenger who will recite Your verses. That prayer was answered in Muhammad (ﷺ). And the valley itself was his trust: make this city secure, and keep me and my sons away from worshipping idols.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 2:124",
          "arabic": " ۞ وَإِذِ ٱبْتَلَىٰٓ إِبْرَٰهِـۧمَ رَبُّهُۥ بِكَلِمَـٰتٍ فَأَتَمَّهُنَّ ۖ قَالَ إِنِّى جَاعِلُكَ لِلنَّاسِ إِمَامًا ۖ قَالَ وَمِن ذُرِّيَّتِى ۖ قَالَ لَا يَنَالُ عَهْدِى ٱلظَّـٰلِمِينَ",
          "translation": "And [mention, O Muḥammad], when Abraham was tried by his Lord with words [i.e., commands] and he fulfilled them. [Allāh] said, \"Indeed, I will make you a leader for the people.\" [Abraham] said, \"And of my descendants?\" [Allāh] said, \"My covenant does not include the wrongdoers.\"",
          "citation": "Surah 2 &middot; Verse 124 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 2:127-129",
          "arabic": " وَإِذْ يَرْفَعُ إِبْرَٰهِـۧمُ ٱلْقَوَاعِدَ مِنَ ٱلْبَيْتِ وَإِسْمَـٰعِيلُ رَبَّنَا تَقَبَّلْ مِنَّآ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ رَبَّنَا وَٱبْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُوا۟ عَلَيْهِمْ ءَايَـٰتِكَ وَيُعَلِّمُهُمُ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَيُزَكِّيهِمْ ۚ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
          "translation": "And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], \"Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing. Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites [of worship] and accept our repentance. Indeed, You are the Accepting of Repentance, the Merciful. Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.\"",
          "citation": "Surah 2 &middot; Verses 127-129 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 14:35",
          "arabic": " وَإِذْ قَالَ إِبْرَٰهِيمُ رَبِّ ٱجْعَلْ هَـٰذَا ٱلْبَلَدَ ءَامِنًا وَٱجْنُبْنِى وَبَنِىَّ أَن نَّعْبُدَ ٱلْأَصْنَامَ",
          "translation": "And [mention, O Muḥammad], when Abraham said, \"My Lord, make this city [i.e., Makkah] secure and keep me and my sons away from worshipping idols.",
          "citation": "Surah 14 &middot; Verse 35 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 14:37",
          "arabic": " رَّبَّنَآ إِنِّىٓ أَسْكَنتُ مِن ذُرِّيَّتِى بِوَادٍ غَيْرِ ذِى زَرْعٍ عِندَ بَيْتِكَ ٱلْمُحَرَّمِ رَبَّنَا لِيُقِيمُوا۟ ٱلصَّلَوٰةَ فَٱجْعَلْ أَفْـِٔدَةً مِّنَ ٱلنَّاسِ تَهْوِىٓ إِلَيْهِمْ وَٱرْزُقْهُم مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمْ يَشْكُرُونَ",
          "translation": "Our Lord, I have settled some of my descendants in an uncultivated valley near Your sacred House, our Lord, that they may establish prayer. So make hearts among the people incline toward them and provide for them from the fruits that they might be grateful.",
          "citation": "Surah 14 &middot; Verse 37 &middot; Saheeh International"
        },
        {
          "t": "hadith",
          "text": "&ldquo;Abraham said, &lsquo;O Ishmael! Allah has given me an order.&rsquo; Ishmael said, &lsquo;Do what your Lord has ordered you to do.&rsquo; Abraham asked, &lsquo;Will you help me?&rsquo; Ishmael said, &lsquo;I will help you.&rsquo; Abraham said, &lsquo;Allah has ordered me to build a house here,&rsquo; pointing to a hillock higher than the land surrounding it. &hellip; Then they raised the foundations of the House (i.e. the Ka&lsquo;ba). Ishmael brought the stones and Abraham was building, and when the walls became high, Ishmael brought this stone and put it for Abraham who stood over it and carried on building, while Ishmael was handing him the stones, and both of them were saying, &lsquo;O our Lord! Accept (this service) from us, Verily, You are the All-Hearing, the All-Knowing.&rsquo;&rdquo;",
          "narrator": "Narrated Ibn &lsquo;Abbas",
          "href": "https://sunnah.com/bukhari:3364",
          "label": "Sahih al-Bukhari 3364 &middot; sunnah.com"
        }
      ]
    },
    {
      "id": "scene-11",
      "ariaLabel": "Scene 11: The Dream and the Great Sacrifice",
      "title": "The Dream and the Great Sacrifice",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 11 of 12"
        },
        {
          "t": "h2",
          "html": "The Dream and the Great Sacrifice"
        },
        {
          "t": "p",
          "html": "Then came the hardest command of all. He had prayed for a righteous child, and Allah gave him good tidings of a forbearing boy. When the boy reached the age of exertion, Ibrahim told him plainly of the dream: I must sacrifice you, so see what you think. The boy answered with his father&rsquo;s own submission: &ldquo;O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.&rdquo; And when they had both submitted, the call came: O Abraham, you have fulfilled the vision. This was the clear trial, and Allah ransomed him with a great sacrifice. And the Quran seals his name with peace forever: &ldquo;Peace upon Abraham.&rdquo;",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 37:99-101",
          "arabic": " وَقَالَ إِنِّى ذَاهِبٌ إِلَىٰ رَبِّى سَيَهْدِينِ رَبِّ هَبْ لِى مِنَ ٱلصَّـٰلِحِينَ فَبَشَّرْنَـٰهُ بِغُلَـٰمٍ حَلِيمٍ",
          "translation": "And [then] he said, \"Indeed, I will go to [where I am ordered by] my Lord; He will guide me. My Lord, grant me [a child] from among the righteous.\" So We gave him good tidings of a forbearing boy.",
          "citation": "Surah 37 &middot; Verses 99-101 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 37:102-103",
          "arabic": " فَلَمَّا بَلَغَ مَعَهُ ٱلسَّعْىَ قَالَ يَـٰبُنَىَّ إِنِّىٓ أَرَىٰ فِى ٱلْمَنَامِ أَنِّىٓ أَذْبَحُكَ فَٱنظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَـٰٓأَبَتِ ٱفْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِىٓ إِن شَآءَ ٱللَّهُ مِنَ ٱلصَّـٰبِرِينَ فَلَمَّآ أَسْلَمَا وَتَلَّهُۥ لِلْجَبِينِ",
          "translation": "And when he reached with him [the age of] exertion, he said, \"O my son, indeed I have seen in a dream that I [must] sacrifice you, so see what you think.\" He said, \"O my father, do as you are commanded. You will find me, if Allāh wills, of the steadfast.\" And when they had both submitted and he put him down upon his forehead,",
          "citation": "Surah 37 &middot; Verses 102-103 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 37:104-107",
          "arabic": " وَنَـٰدَيْنَـٰهُ أَن يَـٰٓإِبْرَٰهِيمُ قَدْ صَدَّقْتَ ٱلرُّءْيَآ ۚ إِنَّا كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ إِنَّ هَـٰذَا لَهُوَ ٱلْبَلَـٰٓؤُا۟ ٱلْمُبِينُ وَفَدَيْنَـٰهُ بِذِبْحٍ عَظِيمٍ",
          "translation": "We called to him, \"O Abraham, You have fulfilled the vision.\" Indeed, We thus reward the doers of good. Indeed, this was the clear trial. And We ransomed him with a great sacrifice,",
          "citation": "Surah 37 &middot; Verses 104-107 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 37:109",
          "arabic": " سَلَـٰمٌ عَلَىٰٓ إِبْرَٰهِيمَ",
          "translation": "\"Peace upon Abraham.\"",
          "citation": "Surah 37 &middot; Verse 109 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-12",
      "ariaLabel": "Scene 12: The Father of Nations",
      "title": "The Father of Nations",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 12 of 12"
        },
        {
          "t": "h2",
          "html": "The Father of Nations"
        },
        {
          "t": "p",
          "html": "The Quran gathers his whole life into a single verdict: a leader, devoutly obedient to Allah, inclining toward truth, grateful for His favors, chosen and guided to a straight path. He belongs to no faction and no age: neither Jew nor Christian, but one inclining toward truth, a Muslim. And yet the man who guided nations could not guide his own father. The Prophet (ﷺ) said that on the Day of Resurrection Ibrahim will meet Azar and plead for him, and the answer will be final.",
          "cls": "dropcap"
        },
        {
          "t": "verse",
          "ref": "Quran 16:120-121",
          "arabic": " إِنَّ إِبْرَٰهِيمَ كَانَ أُمَّةً قَانِتًا لِّلَّهِ حَنِيفًا وَلَمْ يَكُ مِنَ ٱلْمُشْرِكِينَ شَاكِرًا لِّأَنْعُمِهِ ۚ ٱجْتَبَىٰهُ وَهَدَىٰهُ إِلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ",
          "translation": "Indeed, Abraham was a [comprehensive] leader, devoutly obedient to Allāh, inclining toward truth, and he was not of those who associate others with Allāh. [He was] grateful for His favors. He [i.e., Allāh] chose him and guided him to a straight path.",
          "citation": "Surah 16 &middot; Verses 120-121 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:67",
          "arabic": " مَا كَانَ إِبْرَٰهِيمُ يَهُودِيًّا وَلَا نَصْرَانِيًّا وَلَـٰكِن كَانَ حَنِيفًا مُّسْلِمًا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
          "translation": "Abraham was neither a Jew nor a Christian, but he was one inclining toward truth, a Muslim [submitting to Allāh]. And he was not of the polytheists.",
          "citation": "Surah 3 &middot; Verse 67 &middot; Saheeh International"
        },
        {
          "t": "hadith",
          "text": "&ldquo;The Prophet (ﷺ) said, &lsquo;On the Day of Resurrection Abraham will meet his father Azar whose face will be dark and covered with dust. &hellip; Abraham will say to him: Didn&rsquo;t I tell you not to disobey me? His father will reply: Today I will not disobey you. Abraham will say: O Lord! You promised me not to disgrace me on the Day of Resurrection; and what will be more disgraceful to me than cursing and dishonoring my father? Then Allah will say: I have forbidden Paradise for the disbelievers.&rsquo;&rdquo;",
          "narrator": "Narrated Abu Huraira",
          "href": "https://sunnah.com/bukhari:3350",
          "label": "Sahih al-Bukhari 3350 &middot; sunnah.com"
        }
      ]
    }
  ],
  "note": "\n        <p class=\"note-kicker\">A note on sources</p>\n        <p>Everything in this chapter is from the Quran, chiefly Surah Al-Anbiya (21:51-71), Surah As-Saffat (37:97-109), Surah Al-Baqarah (2:124-129, 2:258, 2:260), Surah Al-An’am (6:74-79), Surah Maryam (19:41-42), Surah Hud (11:69-73), Surah Ibrahim (14:35-37), Surah An-Nahl (16:120-121), Surah Ali ’Imran (3:67) and Surah Al-Ankabut (29:24-26), with two narrations from Sahih al-Bukhari. What revelation does not give, we do not add: the Quran does not name the king who debated him, does not name the son seen in the dream, and does not describe the furnace, the journey, or the years between events. Later books add such details, but they are not established in the Quran or authentic hadith, so this chapter leaves them out, and ends where revelation ends.</p>\n      ",
  "lessons": [
    "<strong>Truth is not inherited.</strong> The son of Azar became the father of nations. Your lineage does not decide your Lord. (Quran 6:74)",
    "<strong>Follow the evidence past the setting point.</strong> Star, moon, sun: each set, and he let each go. Worship what does not set. (Quran 6:76-79)",
    "<strong>False gods cannot answer.</strong> “Ask them, if they should [be able to] speak”: the idols’ silence was the whole argument. (Quran 21:63)",
    "<strong>The fire obeys its Maker.</strong> “O fire, be coolness and safety”: the means of harm become shelter when Allah wills. (Quran 21:69)",
    "<strong>“Do as you are commanded.”</strong> Father and son submitted together; the trial was the obedience, not the outcome. (Quran 37:102)",
    "<strong>Build, then beg acceptance.</strong> “Our Lord, accept [this] from us”: the House was raised with hands and with du’a. (Quran 2:127)"
  ],
  "quiz": [
    {
      "q": "What did Ibrahim ask his father Azar?",
      "options": [
        "Do you take idols as deities?",
        "Who built this temple?",
        "Where is your god?"
      ],
      "answer": 0,
      "ref": "Quran 6:74"
    },
    {
      "q": "What did Ibrahim say when the star set?",
      "options": [
        "I like not those that set",
        "The night is too dark",
        "My lord has abandoned me"
      ],
      "answer": 0,
      "ref": "Quran 6:76"
    },
    {
      "q": "What did Allah command the fire to become for Ibrahim?",
      "options": [
        "Coolness and safety",
        "Smoke and ashes",
        "A guiding light"
      ],
      "answer": 0,
      "ref": "Quran 21:69"
    },
    {
      "q": "What did Ibrahim ask Allah to show him?",
      "options": [
        "How He gives life to the dead",
        "The face of the angel",
        "The treasures of the earth"
      ],
      "answer": 0,
      "ref": "Quran 2:260"
    },
    {
      "q": "With whom did Ibrahim raise the foundations of the House?",
      "options": [
        "Ismail",
        "Ishaq",
        "Lut"
      ],
      "answer": 0,
      "ref": "Quran 2:127"
    },
    {
      "q": "With what did Allah ransom Ibrahim’s son?",
      "options": [
        "A great sacrifice",
        "A flock of sheep",
        "A garden of fruits"
      ],
      "answer": 0,
      "ref": "Quran 37:107"
    }
  ],
  "prevNext": [
    {
      "href": "?p=salih",
      "label": "Previous chapter: V",
      "title": "Salih (AS): The She-Camel of Allah",
      "arrow": "back"
    },
    {
      "href": "?p=lut",
      "label": "Next chapter: VII",
      "title": "Lut (AS): The Overturned Towns",
      "arrow": "next"
    }
  ]
};
