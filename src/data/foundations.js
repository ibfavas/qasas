/* Foundations registry for the single foundations page.
   Guides: iman, pillars, quran.
   Verse panels: Uthmani Arabic + Saheeh International, pulled from the
   Quran.com API. Hadith wordings verified verbatim on sunnah.com. */
export const foundations = {
  iman:   {
    "hero": {
      "plaque": "Foundations",
      "title": "The Six Articles of Faith",
      "sub": "What a Muslim believes — the six convictions named by the Prophet ﷺ when Jibreel asked him, “Inform me about iman.”",
      "img": "../assets/foundations-iman.webp",
      "imgAlt": "A desert of dunes under a star-filled night sky with a crescent moon",
      "caption": "The night sky over silent dunes &mdash; a reminder of the unseen that the six articles affirm."
    },
    "introHtml": "One day, as the Prophet ﷺ sat with his companions, a man appeared in pure white — no sign of travel on him, yet no one knew him. He asked about Islam, then about iman, then about ihsan, and confirmed every answer: “You have told the truth.” When he left, the Prophet ﷺ said: “He was Jibreel. He came to you in order to instruct you in matters of religion.” His answer about iman named six articles — the six beliefs every Muslim holds, and the ground every story on this site stands on.",
    "railLabels": ["Belief in Allah", "Belief in His Angels", "Belief in His Books", "Belief in His Messengers", "Belief in the Last Day", "Belief in Divine Decree"],
    "sections": [
      {
        "id": "article-1",
        "ariaLabel": "Article 1: Belief in Allah",
        "title": "Belief in Allah",
        "blocks": [
{"t": "hadith",
      "text": "&ldquo;He (the inquirer) said: Inform me about Iman (faith). He (the Holy Prophet) replied: That you affirm your faith in Allah, in His angels, in His Books, in His Apostles, in the Day of Judgment, and you affirm your faith in the Divine Decree about good and evil. He (the inquirer) said: You have told the truth.&rdquo;",
      "narrator": "&mdash; Narrated &lsquo;Umar ibn al-Khattab",
      "href": "https://sunnah.com/muslim:8a",
      "label": "Sahih Muslim 8a &middot; sunnah.com"},
              {"t": "kicker", "html": "Article 1 of 6"},
              {"t": "h2", "html": "Belief in Allah"},
              {"t": "p", "cls": "dropcap", "html": "The first article is the root of all the rest: that Allah is One, without partner and without equal — the Eternal Refuge who neither begets nor was born. Every prophet’s call began with the same words, “Worship Allah; you have no deity other than Him,” and every story here returns to them."},
              {"t": "verse",
                "ref": "Quran 112:1-4",
                "arabic": "قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
                "translation": "Say, \"He is Allāh, [who is] One, Allāh, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.\"",
                "citation": "Surah 112 &middot; Verses 1-4 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "article-2",
        "ariaLabel": "Article 2: Belief in His Angels",
        "title": "Belief in His Angels",
        "blocks": [
              {"t": "kicker", "html": "Article 2 of 6"},
              {"t": "h2", "html": "Belief in His Angels"},
              {"t": "p", "html": "The Quran names them in the believers’ creed alongside Allah Himself: His angels, His books, His messengers. Among the angels is Jibreel — the one who came in the form of a man to teach the companions their religion, and whose question gave us these six articles."},
              {"t": "verse",
                "ref": "Quran 2:285",
                "arabic": "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
                "translation": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], \"We make no distinction between any of His messengers.\" And they say, \"We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.\"",
                "citation": "Surah 2 &middot; Verse 285 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "article-3",
        "ariaLabel": "Article 3: Belief in His Books",
        "title": "Belief in His Books",
        "blocks": [
              {"t": "kicker", "html": "Article 3 of 6"},
              {"t": "h2", "html": "Belief in His Books"},
              {"t": "p", "html": "Allah sent guidance down in Books — the Quran to Muhammad ﷺ, and scriptures before it to the messengers of earlier nations. Belief in the Books means affirming what was revealed to him and what was revealed before him: every scripture Allah sent down, and the Hereafter of which they all warn."},
              {"t": "verse",
                "ref": "Quran 2:4",
                "arabic": "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ",
                "translation": "And who believe in what has been revealed to you, [O Muḥammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
                "citation": "Surah 2 &middot; Verse 4 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "article-4",
        "ariaLabel": "Article 4: Belief in His Messengers",
        "title": "Belief in His Messengers",
        "blocks": [
              {"t": "kicker", "html": "Article 4 of 6"},
              {"t": "h2", "html": "Belief in His Messengers"},
              {"t": "p", "html": "Belief in the messengers means affirming all of them — Abraham, Ishmael, Isaac, Jacob, Moses, Jesus, and the prophets — making no distinction between any of them, and submitting to Allah as they taught."},
              {"t": "verse",
                "ref": "Quran 2:136",
                "arabic": "قُولُوٓا۟ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْنَا وَمَآ أُنزِلَ إِلَىٰٓ إِبْرَٰهِـۧمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَمَآ أُوتِىَ مُوسَىٰ وَعِيسَىٰ وَمَآ أُوتِىَ ٱلنَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْهُمْ وَنَحْنُ لَهُۥ مُسْلِمُونَ",
                "translation": "Say, [O believers], \"We have believed in Allāh and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants [al-Asbāṭ] and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.\"",
                "citation": "Surah 2 &middot; Verse 136 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "article-5",
        "ariaLabel": "Article 5: Belief in the Last Day",
        "title": "Belief in the Last Day",
        "blocks": [
              {"t": "kicker", "html": "Article 5 of 6"},
              {"t": "h2", "html": "Belief in the Last Day"},
              {"t": "p", "html": "This world is not the end. Belief in the Last Day means affirming the resurrection, the judgment, and the recompense — that every soul will be repaid in full for what it did. The Quran ties this belief to righteousness itself: true piety is not a direction you face, but what you believe and what you do."},
              {"t": "verse",
                "ref": "Quran 2:177",
                "arabic": "۞ لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا۟ وُجُوهَكُمْ قِبَلَ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَلَـٰكِنَّ ٱلْبِرَّ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَٱلْمَلَـٰٓئِكَةِ وَٱلْكِتَـٰبِ وَٱلنَّبِيِّـۧنَ وَءَاتَى ٱلْمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلْقُرْبَىٰ وَٱلْيَتَـٰمَىٰ وَٱلْمَسَـٰكِينَ وَٱبْنَ ٱلسَّبِيلِ وَٱلسَّآئِلِينَ وَفِى ٱلرِّقَابِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ وَٱلْمُوفُونَ بِعَهْدِهِمْ إِذَا عَـٰهَدُوا۟ ۖ وَٱلصَّـٰبِرِينَ فِى ٱلْبَأْسَآءِ وَٱلضَّرَّآءِ وَحِينَ ٱلْبَأْسِ ۗ أُو۟لَـٰٓئِكَ ٱلَّذِينَ صَدَقُوا۟ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُتَّقُونَ",
                "translation": "Righteousness is not that you turn your faces toward the east or the west, but [true] righteousness is [in] one who believes in Allāh, the Last Day, the angels, the Book, and the prophets and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask [for help], and for freeing slaves; [and who] establishes prayer and gives zakāh; [those who] fulfill their promise when they promise; and [those who] are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous.",
                "citation": "Surah 2 &middot; Verse 177 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "article-6",
        "ariaLabel": "Article 6: Belief in Divine Decree",
        "title": "Belief in Divine Decree",
        "blocks": [
              {"t": "kicker", "html": "Article 6 of 6"},
              {"t": "h2", "html": "Belief in Divine Decree"},
              {"t": "p", "html": "Nothing happens outside Allah’s knowledge and will. Belief in qadar means affirming that He created all things with measure — the good and the painful alike. Ibn ‘Umar, who reported this hadith, swore that Allah would not accept even a mountain of gold spent in His way from one who denies the Decree."},
              {"t": "verse",
                "ref": "Quran 54:49",
                "arabic": "إِنَّا كُلَّ شَىْءٍ خَلَقْنَـٰهُ بِقَدَرٍ",
                "translation": "Indeed, all things We created with predestination.",
                "citation": "Surah 54 &middot; Verse 49 &mdash; Saheeh International"}
        ]
      }
    ],
    "note": "\n        <p class=\"note-kicker\">A note on sources</p>\n        <p>Everything in this guide is from the Quran — chiefly Surah Al-Ikhlas (112), Surah Al-Baqarah (2:4, 2:136, 2:177, 2:285) and Surah Al-Qamar (54:49) — with the six articles named in Sahih Muslim 8a, the hadith of Jibreel. Where revelation is silent, we stay silent.</p>\n      ",
    "prevNext": [{"label": "Next guide", "title": "The Five Pillars of Islam", "href": "?p=pillars", "arrow": "next"}]
  },
  pillars:   {
    "hero": {
      "plaque": "Foundations",
      "title": "The Five Pillars of Islam",
      "sub": "What a Muslim does — the five practices upon which Islam is built, named by the Prophet ﷺ in a single hadith.",
      "img": "../assets/foundations-pillars.webp",
      "imgAlt": "Five ancient stone pillars standing in a desert valley at dawn",
      "caption": "Five pillars in the desert at dawn &mdash; the five practices that hold up the life of a Muslim."
    },
    "introHtml": "Iman is what the heart holds; Islam is what the limbs carry out. When the Prophet ﷺ was asked what Islam is built upon, he named five things — a testimony, a prayer, a charity, a fast, and a pilgrimage. Five pillars, and the whole religion stands on them.",
    "railLabels": ["The Testimony", "The Prayer", "The Charity", "The Fast", "The Pilgrimage"],
    "sections": [
      {
        "id": "pillar-1",
        "ariaLabel": "Pillar 1: The Testimony",
        "title": "The Testimony — Shahada",
        "blocks": [
{"t": "hadith",
      "text": "&ldquo;Allah&rsquo;s Messenger (ﷺ) said: Islam is based on (the following) five (principles): 1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah&rsquo;s Messenger (ﷺ). 2. To offer the (compulsory congregational) prayers dutifully and perfectly. 3. To pay Zakat (i.e. obligatory charity). 4. To perform Hajj. (i.e. Pilgrimage to Mecca) 5. To observe fast during the month of Ramadan.&rdquo;",
      "narrator": "&mdash; Narrated Ibn &lsquo;Umar",
      "href": "https://sunnah.com/bukhari:8",
      "label": "Sahih al-Bukhari 8 &middot; sunnah.com"},
              {"t": "kicker", "html": "Pillar 1 of 5"},
              {"t": "h2", "html": "The Testimony — Shahada"},
              {"t": "p", "cls": "dropcap", "html": "“None has the right to be worshipped but Allah, and Muhammad is the Messenger of Allah.” The shahada is the door into Islam and its constant renewal — spoken with the tongue, believed in the heart, lived by the limbs. Allah Himself testifies to it, and so do the angels and those of knowledge."},
              {"t": "verse",
                "ref": "Quran 3:18",
                "arabic": "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّا هُوَ وَٱلْمَلَـٰٓئِكَةُ وَأُو۟لُوا۟ ٱلْعِلْمِ قَآئِمًۢا بِٱلْقِسْطِ ۚ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
                "translation": "Allāh witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
                "citation": "Surah 3 &middot; Verse 18 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "pillar-2",
        "ariaLabel": "Pillar 2: The Prayer",
        "title": "The Prayer — Salah",
        "blocks": [
              {"t": "kicker", "html": "Pillar 2 of 5"},
              {"t": "h2", "html": "The Prayer — Salah"},
              {"t": "p", "html": "The prayer is the daily covenant between the servant and his Lord — established at its times, in congregation, with bowing and prostration. Wherever the Quran describes the believers, it joins the prayer to the charity: establish prayer, give zakah, and bow with those who bow."},
              {"t": "verse",
                "ref": "Quran 2:43",
                "arabic": "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ",
                "translation": "And establish prayer and give zakāh and bow with those who bow [in worship and obedience].",
                "citation": "Surah 2 &middot; Verse 43 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "pillar-3",
        "ariaLabel": "Pillar 3: The Charity",
        "title": "The Charity — Zakah",
        "blocks": [
              {"t": "kicker", "html": "Pillar 3 of 5"},
              {"t": "h2", "html": "The Charity — Zakah"},
              {"t": "p", "html": "Zakah is the obligatory charity taken from wealth — by which, the verse says, Allah purifies the giver and causes him increase. The Prophet ﷺ was commanded: take from their wealth a charity by which you purify them."},
              {"t": "verse",
                "ref": "Quran 9:103",
                "arabic": "خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَوٰتَكَ سَكَنٌ لَّهُمْ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
                "translation": "Take, [O Muḥammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allāh's blessings] upon them. Indeed, your invocations are reassurance for them. And Allāh is Hearing and Knowing.",
                "citation": "Surah 9 &middot; Verse 103 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "pillar-4",
        "ariaLabel": "Pillar 4: The Fast",
        "title": "The Fast — Sawm",
        "blocks": [
              {"t": "kicker", "html": "Pillar 4 of 5"},
              {"t": "h2", "html": "The Fast — Sawm"},
              {"t": "p", "html": "In Ramadan the Muslim fasts as those before him fasted — a decree written upon the believers, not a new burden. Its purpose is named in the verse itself, in a single phrase: <i>la‘allakum tattaqun</i> — that you may become righteous."},
              {"t": "verse",
                "ref": "Quran 2:183",
                "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
                "translation": "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -",
                "citation": "Surah 2 &middot; Verse 183 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "pillar-5",
        "ariaLabel": "Pillar 5: The Pilgrimage",
        "title": "The Pilgrimage — Hajj",
        "blocks": [
              {"t": "kicker", "html": "Pillar 5 of 5"},
              {"t": "h2", "html": "The Pilgrimage — Hajj"},
              {"t": "p", "html": "The pilgrimage to the Sacred House in Makkah is due to Allah from whoever is able to find a way — the journey to where Abraham once stood, and safety for whoever enters it."},
              {"t": "verse",
                "ref": "Quran 3:97",
                "arabic": "فِيهِ ءَايَـٰتٌۢ بَيِّنَـٰتٌ مَّقَامُ إِبْرَٰهِيمَ ۖ وَمَن دَخَلَهُۥ كَانَ ءَامِنًا ۗ وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ مَنِ ٱسْتَطَاعَ إِلَيْهِ سَبِيلًا ۚ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِىٌّ عَنِ ٱلْعَـٰلَمِينَ",
                "translation": "In it are clear signs [such as] the standing place of Abraham. And whoever enters it [i.e., the Ḥaram] shall be safe. And [due] to Allāh from the people is a pilgrimage to the House - for whoever is able to find thereto a way. But whoever disbelieves [i.e., refuses] - then indeed, Allāh is free from need of the worlds.",
                "citation": "Surah 3 &middot; Verse 97 &mdash; Saheeh International"}
        ]
      }
    ],
    "note": "\n        <p class=\"note-kicker\">A note on sources</p>\n        <p>Everything in this guide is from the Quran — Surah Al-Baqarah (2:43, 2:183), Surah Ali ‘Imran (3:18, 3:97) and Surah At-Tawbah (9:103) — with the five pillars named in Sahih al-Bukhari 8. Where revelation is silent, we stay silent.</p>\n      ",
    "prevNext": [{"label": "Previous guide", "title": "The Six Articles of Faith", "href": "?p=iman", "arrow": "back"}, {"label": "Next guide", "title": "The Standardization of the Quran", "href": "?p=quran", "arrow": "next"}]
  },
  quran: {
    "hero": {
      "plaque": "Foundations",
      "title": "The Standardization of the Quran",
      "sub": "How the revelation was gathered into one book and guarded for every generation after — the history of the mushaf, from Yamama to Uthman\u2019s master codex.",
      "img": "../assets/foundations-quran.webp",
      "imgAlt": "A scribe's desk with blank scrolls, reed pens and an inkwell in warm lamplight",
      "caption": "The scribe\u2019s desk &mdash; blank sheets awaiting the words that would be guarded for fourteen centuries."
    },
    "introHtml": "Everything in this guide happened after the death of the Prophet \uFDFa &mdash; and that is the point. The revelation was complete, the Messenger \uFDFa was gone, and the young Muslim community faced a question no generation had faced before: how do you guard a Book when the man who received it is no longer among you? What follows is the history of how they answered &mdash; from the battlefield of Yamama to the master codex of Uthman &mdash; traced through the narrations the community itself preserved.",
    "railLabels": ["The Promise", "Written in His Lifetime", "Yamama", "Zayd\u2019s Task", "Custody of the Suhuf", "Hudhayfah\u2019s Warning", "The Committee", "Why Copies Were Burned", "One Text, Everywhere"],
    "sections": [
      {
        "id": "the-promise",
        "ariaLabel": "The Promise",
        "title": "The Promise",
        "blocks": [
              {"t": "kicker", "html": "Where it begins"},
              {"t": "h2", "html": "The Promise"},
              {"t": "p", "cls": "dropcap", "html": "Before the history, the promise. Allah says He sent down the Remembrance &mdash; and that He Himself will guard it. Every gathering, every manuscript, every copy that follows is the human side of that divine guarantee: the means by which the promise was kept, generation after generation."},
              {"t": "verse",
                "ref": "Quran 15:9",
                "arabic": "\u0625\u0650\u0646\u0651\u064e\u0627 \u0646\u064e\u062d\u0652\u0646\u064f \u0646\u064e\u0632\u0651\u064e\u0644\u0652\u0646\u064e\u0627 \u0671\u0644\u0630\u0651\u0650\u0643\u0652\u0631\u064e \u0648\u064e\u0625\u0650\u0646\u0651\u064e\u0627 \u0644\u064e\u0647\u064f\u06e5 \u0644\u064e\u062d\u064e\u0640\u0670\u0641\u0650\u0638\u064f\u0648\u0646\u064e",
                "translation": "Indeed, it is We who sent down the message [i.e., the Qur\u2019\u0101n], and indeed, We will be its guardian.",
                "citation": "Surah 15 &middot; Verse 9 &mdash; Saheeh International"}
        ]
      },
      {
        "id": "written-lifetime",
        "ariaLabel": "Written in His Lifetime",
        "title": "Written in His Lifetime",
        "blocks": [
              {"t": "kicker", "html": "Before the gatherings"},
              {"t": "h2", "html": "Written in His Lifetime"},
              {"t": "p", "html": "The Quran was not first written after the Prophet\u2019s \uFDFa death &mdash; it was written during his life. He had scribes, and Zayd ibn Thabit, who would later be entrusted with both gatherings, was one of them, writing the revelation as it came. The verses lived on palm stalks and thin white stones &mdash; and more securely, in the hearts of the companions who memorized them."},
              {"t": "p", "html": "And the text was fixed by review. Every Ramadan, Jibreel would go over the whole Quran with the Prophet \uFDFa &mdash; and in his final year, they went over it twice."},
{"t": "hadith",
      "text": "&ldquo;Gabriel used to repeat the recitation of the Qur\u2019an with the Prophet (\uFDFa) once a year, but he repeated it twice with him in the year he died.&rdquo;",
      "narrator": "&mdash; Narrated Abu Huraira",
      "href": "https://sunnah.com/bukhari:4998",
      "label": "Sahih al-Bukhari 4998 &middot; sunnah.com"},
              {"t": "p", "html": "So when the Prophet \uFDFa died, the Quran stood complete &mdash; written in fragments, memorized in full &mdash; but not yet gathered into a single book."}
        ]
      },
      {
        "id": "yamama",
        "ariaLabel": "Yamama",
        "title": "Yamama",
        "blocks": [
              {"t": "kicker", "html": "11 AH &middot; The Riddah Wars"},
              {"t": "h2", "html": "Yamama"},
              {"t": "p", "cls": "dropcap", "html": "Then came Yamama. In the wars against Musaylima the liar, the Muslim army won &mdash; but at a cost that shook Umar ibn al-Khattab: heavy casualties among the Qurra\u2019, the companions who carried the whole Quran in memory. Umar saw what the next battlefield could take, and he went to Abu Bakr with a proposal no one had made before."},
{"t": "hadith",
      "text": "&ldquo;Casualties were heavy among the Qurra\u2019 of the Qur\u2019an (i.e. those who knew the Qur\u2019an by heart) on the day of the Battle of Yamama, and I am afraid that more heavy casualties may take place among the Qurra\u2019 on other battlefields, whereby a large part of the Qur\u2019an may be lost. Therefore I suggest, you (Abu Bakr) order that the Qur\u2019an be collected.&rdquo;",
      "narrator": "&mdash; Umar ibn al-Khattab, narrated by Zayd ibn Thabit",
      "href": "https://sunnah.com/bukhari:4986",
      "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"},
              {"t": "p", "html": "Abu Bakr hesitated &mdash; &ldquo;How can you do something which Allah\u2019s Apostle did not do?&rdquo; &mdash; but Umar kept urging him, calling it a good project, until Allah opened Abu Bakr\u2019s chest to the idea, as He had opened Umar\u2019s."}
        ]
      },
      {
        "id": "zayd-task",
        "ariaLabel": "Zayd\u2019s Task",
        "title": "Zayd\u2019s Task",
        "blocks": [
              {"t": "kicker", "html": "The first gathering"},
              {"t": "h2", "html": "Zayd\u2019s Task"},
              {"t": "p", "html": "Abu Bakr summoned Zayd ibn Thabit &mdash; young, trusted, a scribe of the revelation itself &mdash; and laid the weight on him: &ldquo;You are a wise young man and we do not have any suspicion about you, and you used to write the Divine Inspiration for Allah\u2019s Messenger (\uFDFa). So you should search for (the fragmentary scripts of) the Qur\u2019an and collect it in one book.&rdquo;"},
{"t": "hadith",
      "text": "&ldquo;By Allah If they had ordered me to shift one of the mountains, it would not have been heavier for me than this ordering me to collect the Qur\u2019an.&rdquo;",
      "narrator": "&mdash; Zayd ibn Thabit",
      "href": "https://sunnah.com/bukhari:4986",
      "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"},
              {"t": "p", "html": "Zayd\u2019s method is given in the hadith\u2019s own words: he gathered the Quran from what was written on palm stalks and thin white stones, and from the men who knew it by heart &mdash; every fragment checked against living memory. He searched until he found the last verses of Surah at-Taubah with Abu Khuzaima al-Ansari, and with no one else."},
{"t": "hadith",
      "text": "&ldquo;So I started looking for the Qur\u2019an and collecting it from (what was written on) palme stalks, thin white stones and also from the men who knew it by heart, till I found the last Verse of Surat at-Tauba (Repentance) with Abi Khuzaima Al-Ansari, and I did not find it with anybody other than him.&rdquo;",
      "narrator": "&mdash; Zayd ibn Thabit",
      "href": "https://sunnah.com/bukhari:4986",
      "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"}
        ]
      },
      {
        "id": "custody",
        "ariaLabel": "Custody of the Suhuf",
        "title": "Custody of the Suhuf",
        "blocks": [
              {"t": "kicker", "html": "The bound sheets"},
              {"t": "h2", "html": "Custody of the Suhuf"},
              {"t": "p", "html": "The gathered sheets &mdash; the Suhuf &mdash; were bound into one collection. The narration ends the first gathering with a chain of custody, each link named: the complete manuscript remained with Abu Bakr until his death, then with Umar for the rest of his life, then with Hafsa, Umar\u2019s daughter and a widow of the Prophet \uFDFa."},
{"t": "hadith",
      "text": "&ldquo;Then the complete manuscripts (copy) of the Qur\u2019an remained with Abu Bakr till he died, then with Umar till the end of his life, and then with Hafsa, the daughter of Umar.&rdquo;",
      "narrator": "&mdash; Zayd ibn Thabit",
      "href": "https://sunnah.com/bukhari:4986",
      "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"}
        ]
      },
      {
        "id": "hudhayfah",
        "ariaLabel": "Hudhayfah\u2019s Warning",
        "title": "Hudhayfah\u2019s Warning",
        "blocks": [
              {"t": "kicker", "html": "Uthman\u2019s caliphate"},
              {"t": "h2", "html": "Hudhayfah\u2019s Warning"},
              {"t": "p", "cls": "dropcap", "html": "Some twenty years later, the empire had stretched across Syria, Iraq, and Persia, and the Quran had traveled with it &mdash; recited in the seven ways the Prophet \uFDFa had permitted, each tribe in its own familiar tongue."},
{"t": "hadith",
      "text": "&ldquo;This Qur\u2019an has been revealed to be recited in seven different ways, so recite of it whichever (way) is easier for you.&rdquo;",
      "narrator": "&mdash; Narrated Umar ibn al-Khattab",
      "href": "https://sunnah.com/bukhari:4992",
      "label": "Sahih al-Bukhari 4992 &middot; sunnah.com"},
              {"t": "p", "html": "What was a mercy in Arabia became a dispute on distant frontiers. Campaigning with the armies of Sham and Iraq at Arminya and Adharbijan, Hudhayfah ibn al-Yaman heard soldiers declaring one another\u2019s recitation wrong &mdash; and he rode back to Medina in alarm."},
{"t": "hadith",
      "text": "&ldquo;O chief of the Believers! Save this nation before they differ about the Book (Qur\u2019an) as Jews and the Christians did before.&rdquo;",
      "narrator": "&mdash; Hudhayfah ibn al-Yaman, narrated by Anas ibn Malik",
      "href": "https://sunnah.com/bukhari:4987",
      "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"}
        ]
      },
      {
        "id": "committee",
        "ariaLabel": "The Committee",
        "title": "The Committee and the Master Codex",
        "blocks": [
              {"t": "kicker", "html": "The second gathering"},
              {"t": "h2", "html": "The Committee and the Master Codex"},
              {"t": "p", "html": "Uthman acted at once. He sent to Hafsa for the Suhuf &mdash; &ldquo;so that we may compile the Qur\u2019anic materials in perfect copies and return the manuscripts to you&rdquo; &mdash; and appointed four men: Zayd ibn Thabit once more, with three Qurayshis &mdash; Abdullah ibn az-Zubayr, Sa\u2019id ibn al-As, and AbdurRahman ibn Harith ibn Hisham."},
{"t": "hadith",
      "text": "&ldquo;In case you disagree with Zaid bin Thabit on any point in the Qur\u2019an, then write it in the dialect of Quraish, the Qur\u2019an was revealed in their tongue.&rdquo;",
      "narrator": "&mdash; Uthman ibn Affan, narrated by Anas ibn Malik",
      "href": "https://sunnah.com/bukhari:4987",
      "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"},
              {"t": "p", "html": "They wrote many copies from the Suhuf in the unpointed script. Uthman returned the original sheets to Hafsa, sent one copy to every Muslim province, and ordered every other Quranic material &mdash; fragment or whole copy &mdash; to be burnt."},
{"t": "hadith",
      "text": "&ldquo;Uthman sent to every Muslim province one copy of what they had copied, and ordered that all the other Qur\u2019anic materials, whether written in fragmentary manuscripts or whole copies, be burnt.&rdquo;",
      "narrator": "&mdash; Narrated Anas ibn Malik",
      "href": "https://sunnah.com/bukhari:4987",
      "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"}
        ]
      },
      {
        "id": "burning",
        "ariaLabel": "Why Copies Were Burned",
        "title": "Why the Other Copies Were Burned",
        "blocks": [
              {"t": "kicker", "html": "The hard decision"},
              {"t": "h2", "html": "Why the Other Copies Were Burned"},
              {"t": "p", "cls": "dropcap", "html": "The burning was not the destruction of the Quran &mdash; it was its protection. The classical scholars explain what those personal copies contained, and why leaving them in circulation would have endangered the text within a generation."},
              {"t": "p", "html": "Many companions kept private notebooks: verses copied for study, with their own explanations, supplications, and commentary written in the margins &mdash; the personal codices associated with men like Abdullah ibn Mas\u2019ud and Ubayy ibn Ka\u2019b. Copied by later hands that could no longer tell the divine words from a companion\u2019s notes, human words would have seeped into scripture."},
              {"t": "p", "html": "Other fragments carried readings in local dialects, or verses whose recitation had been abrogated &mdash; the very differences that had set the armies of Sham and Iraq arguing. One master codex, transcribed from the Suhuf of Hafsa under Zayd &mdash; who had written the revelation himself &mdash; ended the fragmentation: from that day, a Quran opened in Damascus and a Quran opened in Kufa held the same text."}
        ]
      },
      {
        "id": "one-text",
        "ariaLabel": "One Text, Everywhere",
        "title": "One Text, Everywhere",
        "blocks": [
              {"t": "kicker", "html": "The promise, kept"},
              {"t": "h2", "html": "One Text, Everywhere"},
              {"t": "p", "html": "That is the whole history: one gathering under Abu Bakr to save the text from loss, one standardization under Uthman to save it from division. The consonantal skeleton they fixed has never changed since &mdash; every mushaf printed today, in Morocco or Indonesia, descends from those master copies. &ldquo;Indeed, it is We who sent down the message, and indeed, We will be its guardian.&rdquo;"}
        ]
      }
    ],
    "note": "\n        <p class=\"note-kicker\">A note on sources</p>\n        <p>Everything in this guide is from the Quran &mdash; Surah Al-Hijr (15:9) &mdash; and from Sahih al-Bukhari: 4986 (the gathering under Abu Bakr, narrated by Zayd ibn Thabit), 4987 (the standardization under Uthman, narrated by Anas ibn Malik), 4992 (the seven ahruf) and 4998 (Jibreel\u2019s final review). The reasons given for the burning of personal copies follow the explanation of the classical scholars. Where the sources are silent, we stay silent.</p>\n      ",
    "prevNext": [{"label": "Previous guide", "title": "The Five Pillars of Islam", "href": "?p=pillars", "arrow": "back"}]
  },
};

export const foundationOrder = ["iman", "pillars", "quran"];
