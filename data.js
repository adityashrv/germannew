// German A1 Interactive Course Data

const GERMAN_A1_DATA = {
  modules: [
    {
      id: "module-1",
      title: "Module 1: Begrüßungen & Basics (Greetings & Basics)",
      description: "Learn how to greet people, introduce yourself, count, and spell in German. Master A1 pronoun conjugation.",
      lessons: [
        {
          id: "m1-l1",
          title: "1.1 The Alphabet & Pronunciation",
          type: "reading",
          content: `
            <h3>German Alphabet & Special Characters</h3>
            <p>The German alphabet has 26 standard letters plus 4 special characters: three Umlauts (<strong>ä, ö, ü</strong>) and the ligature <strong>ß</strong> (Eszett / double S).</p>
            
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Letter</th>
                    <th>Name / Sound (approx.)</th>
                    <th>Example Word</th>
                    <th>English Translation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>A / a</td><td>ah</td><td><strong>A</strong>pfel</td><td>Apple</td></tr>
                  <tr><td>Ä / ä</td><td>ay (as in 'say')</td><td>V<strong>ä</strong>ter</td><td>Fathers</td></tr>
                  <tr><td>B / b</td><td>beh</td><td><strong>B</strong>rot</td><td>Bread</td></tr>
                  <tr><td>C / c</td><td>tseh</td><td><strong>C</strong>afé</td><td>Cafe</td></tr>
                  <tr><td>D / d</td><td>deh</td><td><strong>D</strong>anke</td><td>Thank you</td></tr>
                  <tr><td>E / e</td><td>ay</td><td><strong>E</strong>ltern</td><td>Parents</td></tr>
                  <tr><td>F / f</td><td>eff</td><td><strong>F</strong>reund</td><td>Friend</td></tr>
                  <tr><td>G / g</td><td>geh (hard G)</td><td><strong>G</strong>ut</td><td>Good</td></tr>
                  <tr><td>H / h</td><td>hah</td><td><strong>H</strong>aus</td><td>House</td></tr>
                  <tr><td>I / i</td><td>ee</td><td><strong>I</strong>nsel</td><td>Island</td></tr>
                  <tr><td>J / j</td><td>yot (sounds like Y)</td><td><strong>J</strong>a</td><td>Yes</td></tr>
                  <tr><td>K / k</td><td>kah</td><td><strong>K</strong>atze</td><td>Cat</td></tr>
                  <tr><td>L / l</td><td>ell</td><td><strong>L</strong>and</td><td>Country</td></tr>
                  <tr><td>M / m</td><td>emm</td><td><strong>M</strong>ilch</td><td>Milk</td></tr>
                  <tr><td>N / n</td><td>enn</td><td><strong>N</strong>ame</td><td>Name</td></tr>
                  <tr><td>O / o</td><td>oh</td><td><strong>O</strong>bst</td><td>Fruit</td></tr>
                  <tr><td>Ö / ö</td><td>uh (round lips, say 'eh')</td><td><strong>Ö</strong>l</td><td>Oil</td></tr>
                  <tr><td>P / p</td><td>peh</td><td><strong>P</strong>apier</td><td>Paper</td></tr>
                  <tr><td>Q / q</td><td>koo (usually 'kv')</td><td><strong>Q</strong>uelle</td><td>Source</td></tr>
                  <tr><td>R / r</td><td>err (guttural)</td><td><strong>R</strong>ot</td><td>Red</td></tr>
                  <tr><td>S / s</td><td>ess (voiced like Z in 'zoo' when starting words)</td><td><strong>S</strong>onne</td><td>Sun</td></tr>
                  <tr><td>T / t</td><td>teh</td><td><strong>T</strong>ee</td><td>Tea</td></tr>
                  <tr><td>U / u</td><td>oo</td><td><strong>U</strong>-Bahn</td><td>Subway</td></tr>
                  <tr><td>Ü / ü</td><td>ee (round lips, say 'ee')</td><td><strong>Ü</strong>bung</td><td>Exercise</td></tr>
                  <tr><td>V / v</td><td>fow (sounds like F)</td><td><strong>V</strong>ater</td><td>Father</td></tr>
                  <tr><td>W / w</td><td>veh (sounds like V)</td><td><strong>W</strong>asser</td><td>Water</td></tr>
                  <tr><td>X / x</td><td>iks</td><td><strong>X</strong>ylophon</td><td>Xylophone</td></tr>
                  <tr><td>Y / y</td><td>ypsilon</td><td><strong>Y</strong>acht</td><td>Yacht</td></tr>
                  <tr><td>Z / z</td><td>tset (sounds like TS in 'cats')</td><td><strong>Z</strong>ug</td><td>Train</td></tr>
                  <tr><td>ß</td><td>ess-tset (sharp S sound)</td><td>hei<strong>ß</strong></td><td>Hot</td></tr>
                </tbody>
              </table>
            </div>

            <h3 class="mt-4">Pronunciation Hacks</h3>
            <ul>
              <li><strong>ei</strong> sounds like <em>"eye"</em> (e.g., <strong>nein</strong> - no, <strong>mein</strong> - my)</li>
              <li><strong>ie</strong> sounds like <em>"ee"</em> (e.g., <strong>sie</strong> - she/they, <strong>bier</strong> - beer)</li>
              <li><strong>eu / äu</strong> sounds like <em>"oy"</em> (e.g., <strong>Euro</strong> - Euro, <strong>Häuser</strong> - houses)</li>
              <li><strong>ch</strong> sounds like a soft breeze/hiss after e/i (e.g., <strong>ich</strong> - I) or guttural after a/o/u (e.g., <strong>Buch</strong> - book)</li>
              <li><strong>sch</strong> sounds like <em>"sh"</em> (e.g., <strong>schnell</strong> - fast)</li>
              <li><strong>sp / st</strong> at the start of a syllable sound like <em>"shp" / "sht"</em> (e.g., <strong>sprechen</strong> - to speak, <strong>Straße</strong> - street)</li>
              <li><strong>w</strong> is always pronounced like the English <strong>V</strong>.</li>
            </ul>
          `
        },
        {
          id: "m1-l2",
          title: "1.2 Greetings & Introductions",
          type: "reading",
          content: `
            <h3>Greetings (Begrüßungen)</h3>
            <p>Depending on the region and the formality of the situation, Germans use different greetings.</p>
            <div class="dialogue-block">
              <p><strong>Formal:</strong></p>
              <ul>
                <li><strong>Guten Morgen!</strong> (Good morning - usually up to 10 AM)</li>
                <li><strong>Guten Tag!</strong> (Good day - mid-day/afternoon)</li>
                <li><strong>Guten Abend!</strong> (Good evening - starting around 6 PM)</li>
                <li><strong>Wie geht es Ihnen?</strong> (How are you? - formal)</li>
              </ul>
              <p><strong>Informal:</strong></p>
              <ul>
                <li><strong>Hallo!</strong> (Hello!)</li>
                <li><strong>Hi!</strong> (Hi!)</li>
                <li><strong>Wie geht's?</strong> / <strong>Wie geht es dir?</strong> (How are you? - informal)</li>
                <li><strong>Na?</strong> (Hey/What's up? - very casual northern German)</li>
                <li><strong>Servus!</strong> / <strong>Grüß Gott!</strong> (Greetings - southern Germany/Austria)</li>
              </ul>
            </div>

            <h3 class="mt-4">Introducing Yourself (Sich vorstellen)</h3>
            <div class="vocab-grid">
              <div class="vocab-card-mini">
                <span class="vocab-de">Wie heißen Sie?</span>
                <span class="vocab-en">What is your name? (Formal)</span>
              </div>
              <div class="vocab-card-mini">
                <span class="vocab-de">Ich heiße Max. / Mein Name ist Max.</span>
                <span class="vocab-en">My name is Max.</span>
              </div>
              <div class="vocab-card-mini">
                <span class="vocab-de">Woher kommen Sie?</span>
                <span class="vocab-en">Where do you come from? (Formal)</span>
              </div>
              <div class="vocab-card-mini">
                <span class="vocab-de">Ich komme aus Deutschland / den USA.</span>
                <span class="vocab-en">I come from Germany / the USA.</span>
              </div>
              <div class="vocab-card-mini">
                <span class="vocab-de">Wo wohnen Sie?</span>
                <span class="vocab-en">Where do you live? (Formal)</span>
              </div>
              <div class="vocab-card-mini">
                <span class="vocab-de">Ich wohne in Berlin.</span>
                <span class="vocab-en">I live in Berlin.</span>
              </div>
            </div>

            <h3 class="mt-4">Sample Dialogue</h3>
            <div class="chat-container">
              <div class="chat-bubble partner">
                <span class="chat-speaker">Anna:</span> Guten Tag! Wie heißen Sie?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Sie (You):</span> Guten Tag! Ich heiße John Miller. Und Sie?
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Anna:</span> Ich heiße Anna Schmidt. Woher kommen Sie, Herr Miller?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Sie (You):</span> Ich komme aus Kanada. Und wo wohnen Sie?
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Anna:</span> Ich wohne in München. Freut mich, Sie kennenzulernen!
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Sie (You):</span> Freut mich auch! Auf Wiedersehen!
              </div>
            </div>
          `
        },
        {
          id: "m1-l3",
          title: "1.3 Pronouns & Verbs: Sein & Haben",
          type: "reading",
          content: `
            <h3>Subject Pronouns (Personalpronomen)</h3>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>German</th>
                    <th>English</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>ich</strong></td><td>I</td><td>Always lowercase unless starting a sentence.</td></tr>
                  <tr><td><strong>du</strong></td><td>you (informal singular)</td><td>Used with friends, family, children.</td></tr>
                  <tr><td><strong>er / sie / es</strong></td><td>he / she / it</td><td>Corresponds to masculine, feminine, neuter.</td></tr>
                  <tr><td><strong>wir</strong></td><td>we</td><td>First person plural.</td></tr>
                  <tr><td><strong>ihr</strong></td><td>you (informal plural)</td><td>Talking to a group of friends/children ("you guys").</td></tr>
                  <tr><td><strong>sie</strong></td><td>they</td><td>Third person plural (lowercase).</td></tr>
                  <tr><td><strong>Sie</strong></td><td>you (formal singular & plural)</td><td>Always capitalized! Used with strangers, colleagues, bosses.</td></tr>
                </tbody>
              </table>
            </div>

            <h3 class="mt-4">Core Verbs: "sein" (to be) & "haben" (to have)</h3>
            <p>These two verbs are highly irregular but the absolute foundation of the German language.</p>
            
            <div class="columns-2">
              <div>
                <h4>Verb: <strong>sein</strong> (to be)</h4>
                <table class="narrow-table">
                  <tr><td>ich</td><td><strong>bin</strong></td></tr>
                  <tr><td>du</td><td><strong>bist</strong></td></tr>
                  <tr><td>er/sie/es</td><td><strong>ist</strong></td></tr>
                  <tr><td>wir</td><td><strong>sind</strong></td></tr>
                  <tr><td>ihr</td><td><strong>seid</strong></td></tr>
                  <tr><td>sie/Sie</td><td><strong>sind</strong></td></tr>
                </table>
              </div>
              <div>
                <h4>Verb: <strong>haben</strong> (to have)</h4>
                <table class="narrow-table">
                  <tr><td>ich</td><td><strong>habe</strong></td></tr>
                  <tr><td>du</td><td><strong>hast</strong></td></tr>
                  <tr><td>er/sie/es</td><td><strong>hat</strong></td></tr>
                  <tr><td>wir</td><td><strong>haben</strong></td></tr>
                  <tr><td>ihr</td><td><strong>habt</strong></td></tr>
                  <tr><td>sie/Sie</td><td><strong>haben</strong></td></tr>
                </table>
              </div>
            </div>

            <h3 class="mt-4">Examples</h3>
            <ul>
              <li>Ich <strong>bin</strong> Student. (I am a student.)</li>
              <li>Wir <strong>haben</strong> ein Buch. (We have a book.)</li>
              <li>Wer <strong>bist</strong> du? (Who are you?)</li>
              <li>Sie <strong>sind</strong> sehr freundlich, Frau Becker. (You are very friendly, Mrs. Becker.)</li>
            </ul>
          `
        }
      ],
      quizzes: [
        {
          question: "How do you say 'My name is...' in German?",
          options: [
            "Ich wohne...",
            "Ich heiße...",
            "Ich komme...",
            "Ich bin aus..."
          ],
          answer: 1,
          explanation: "'Ich heiße...' means 'I am called...' or 'My name is...'. 'Ich wohne' means 'I live', and 'Ich komme' means 'I come'."
        },
        {
          question: "What is the correct conjugation of 'sein' for 'du'?",
          options: [
            "bin",
            "ist",
            "seid",
            "bist"
          ],
          answer: 3,
          explanation: "The verb 'sein' conjugates as: ich bin, du bist, er/sie/es ist."
        },
        {
          question: "Which of the following pronouns must ALWAYS be capitalized to mean 'you (formal)'?",
          options: [
            "du",
            "ihr",
            "Sie",
            "wir"
          ],
          answer: 2,
          explanation: "'Sie' (capitalized) is the formal version of 'you'. Lowercase 'sie' means 'she' or 'they'."
        },
        {
          question: "Conjugate 'haben' correctly: 'Wir ___ ein Auto.'",
          options: [
            "habt",
            "hast",
            "haben",
            "hat"
          ],
          answer: 2,
          explanation: "'Wir' takes the infinitive/standard plural form 'haben' (We have a car)."
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2: Nomen & Artikel (Nouns, Gender & Articles)",
      description: "German nouns are gendered (der, die, das). Learn the definite, indefinite, and negative articles, and the Accusative case.",
      lessons: [
        {
          id: "m2-l1",
          title: "2.1 Noun Gender & Capitalization",
          type: "reading",
          content: `
            <h3>Capitalization Rule</h3>
            <p>In German, <strong>ALL nouns are capitalized</strong>, regardless of where they appear in the sentence. For example: <em>Der <strong>Hund</strong> bellt im <strong>Garten</strong>.</em> (The dog barks in the garden.)</p>

            <h3 class="mt-4">Genders: Masculine, Feminine, Neuter</h3>
            <p>Every German noun has a grammatical gender, represented by its definite article ('the'):</p>
            <ul>
              <li><span class="gender-m"><strong>der</strong></span> - Masculine (e.g., <strong>der Tisch</strong> - the table)</li>
              <li><span class="gender-f"><strong>die</strong></span> - Feminine (e.g., <strong>die Tasche</strong> - the bag)</li>
              <li><span class="gender-n"><strong>das</strong></span> - Neuter (e.g., <strong>das Buch</strong> - the book)</li>
              <li><span class="gender-p"><strong>die</strong></span> - Plural (all genders share <strong>die</strong> in the plural!)</li>
            </ul>

            <h3 class="mt-4">Tips to Predict Noun Gender</h3>
            <p>While often random, noun endings can help you guess the gender:</p>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Gender</th>
                    <th>Common Endings</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="gender-m"><strong>Masculine (der)</strong></span></td>
                    <td>-ling, -ismus, -or, -er (often people/jobs)</td>
                    <td>der Schmetter<strong>ling</strong> (butterfly), der Lehr<strong>er</strong> (teacher)</td>
                  </tr>
                  <tr>
                    <td><span class="gender-f"><strong>Feminine (die)</strong></span></td>
                    <td>-ung, -heit, -keit, -schaft, -tät, -in (female jobs)</td>
                    <td>die Zeit<strong>ung</strong> (newspaper), die Lehr<strong>in</strong> (female teacher)</td>
                  </tr>
                  <tr>
                    <td><span class="gender-n"><strong>Neuter (das)</strong></span></td>
                    <td>-chen, -lein (diminutives), -ment, -um</td>
                    <td>das Mäd<strong>chen</strong> (girl), das Dokume<strong>nt</strong> (document)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          id: "m2-l2",
          title: "2.2 Definite, Indefinite & Negative Articles",
          type: "reading",
          content: `
            <h3>Definite vs. Indefinite Articles</h3>
            <p>Just like English has "the" (definite) and "a/an" (indefinite), German has specific articles for each gender:</p>
            
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Gender</th>
                    <th>Definite (The)</th>
                    <th>Indefinite (A/An)</th>
                    <th>Negative (No / Not a)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Masculine</td><td><strong>der</strong> Tisch</td><td><strong>ein</strong> Tisch</td><td><strong>kein</strong> Tisch</td></tr>
                  <tr><td>Feminine</td><td><strong>die</strong> Lampe</td><td><strong>eine</strong> Lampe</td><td><strong>keine</strong> Lampe</td></tr>
                  <tr><td>Neuter</td><td><strong>das</strong> Buch</td><td><strong>ein</strong> Buch</td><td><strong>kein</strong> Buch</td></tr>
                  <tr><td>Plural</td><td><strong>die</strong> Bücher</td><td><em>(none)</em></td><td><strong>keine</strong> Bücher</td></tr>
                </tbody>
              </table>
            </div>

            <h3 class="mt-4">The Negative Article: "kein"</h3>
            <p>Use <strong>kein</strong> (declined like 'ein') to negate nouns that have an indefinite article or no article:</p>
            <ul>
              <li>Das ist <strong>ein</strong> Stift. &rarr; Das ist <strong>kein</strong> Stift. (That is not a pen.)</li>
              <li>Ich habe Geld. &rarr; Ich habe <strong>kein</strong> Geld. (I have no money.)</li>
            </ul>
          `
        },
        {
          id: "m2-l3",
          title: "2.3 The Cases: Nominative vs. Accusative",
          type: "reading",
          content: `
            <h3>What are Cases?</h3>
            <p>Cases show the grammatical role of a noun in a sentence. German has 4 cases. For A1, you need to master <strong>Nominative</strong> and <strong>Accusative</strong>.</p>
            <ul>
              <li><strong>Nominative:</strong> The subject performing the action. (e.g., <em><strong>Der Mann</strong> liest.</em> - The man reads.)</li>
              <li><strong>Accusative:</strong> The direct object receiving the action. (e.g., <em>Der Mann sieht <strong>den Hund</strong>.</em> - The man sees the dog.)</li>
            </ul>

            <h3 class="mt-4">The Golden Rule of Accusative Case</h3>
            <p class="accent-box"><strong>Only MASCULINE articles change in the Accusative!</strong> Feminine, Neuter, and Plural articles stay exactly the same as in the Nominative.</p>

            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Case</th>
                    <th>Masculine (der)</th>
                    <th>Feminine (die)</th>
                    <th>Neuter (das)</th>
                    <th>Plural (die)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Nominative</strong></td>
                    <td><span class="gender-m">der / ein / kein</span></td>
                    <td><span class="gender-f">die / eine / keine</span></td>
                    <td><span class="gender-n">das / ein / kein</span></td>
                    <td><span class="gender-p">die / -- / keine</span></td>
                  </tr>
                  <tr>
                    <td><strong>Accusative</strong></td>
                    <td><span class="accent-text"><strong>den / einen / keinen</strong></span></td>
                    <td><span class="gender-f">die / eine / keine</span></td>
                    <td><span class="gender-n">das / ein / kein</span></td>
                    <td><span class="gender-p">die / -- / keine</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="mt-4">Examples of Accusative Changes</h3>
            <ul>
              <li>Der Apfel ist rot. (Nominative: 'der Apfel' is the subject)</li>
              <li>Ich esse <strong>den</strong> Apfel. (Accusative: 'den Apfel' is being eaten. 'der' changes to 'den')</li>
              <li>Das Buch ist gut. (Nominative)</li>
              <li>Ich lese <strong>das</strong> Buch. (Accusative: Neuter doesn't change!)</li>
            </ul>
          `
        }
      ],
      quizzes: [
        {
          question: "Which article represents the neuter grammatical gender ('the') in German?",
          options: [
            "der",
            "die",
            "das",
            "den"
          ],
          answer: 2,
          explanation: "'das' is the definite article for neuter nouns (e.g., das Buch, das Auto)."
        },
        {
          question: "German nouns are always capitalized. Is this statement true?",
          options: [
            "Yes, all nouns must start with a capital letter.",
            "No, only proper names are capitalized.",
            "Only nouns at the start of a sentence are capitalized.",
            "Only masculine and feminine nouns are capitalized."
          ],
          answer: 0,
          explanation: "In German, all nouns (people, places, things, abstract concepts) are capitalized regardless of their position in a sentence."
        },
        {
          question: "In the Accusative case (direct object), which gender changes its definite article?",
          options: [
            "Feminine",
            "Neuter",
            "Masculine",
            "Plural"
          ],
          answer: 2,
          explanation: "Only masculine articles change in the Accusative case: 'der' becomes 'den', 'ein' becomes 'einen', and 'kein' becomes 'keinen'."
        },
        {
          question: "Translate: 'I have a dog.' (Dog is masculine: 'der Hund')",
          options: [
            "Ich habe ein Hund.",
            "Ich habe eine Hund.",
            "Ich habe einen Hund.",
            "Ich habe den Hund."
          ],
          answer: 2,
          explanation: "'Hund' is masculine. In 'Ich habe...', the dog is the direct object (Accusative case). Therefore, 'ein Hund' becomes 'einen Hund'."
        }
      ]
    },
    {
      id: "module-3",
      title: "Module 3: Alltag, Zahlen & Uhrzeit (Daily Life, Numbers & Time)",
      description: "Learn numbers, tell time, and conjugate regular, irregular, and separable verbs in the present tense.",
      lessons: [
        {
          id: "m3-l1",
          title: "3.1 Numbers 1 to 100+",
          type: "reading",
          content: `
            <h3>Numbers 0–12 (Basiszahlen)</h3>
            <p>Learn these off by heart, as they are crucial for telling time!</p>
            <div class="vocab-grid">
              <div><strong>0:</strong> null</div>
              <div><strong>1:</strong> eins</div>
              <div><strong>2:</strong> zwei</div>
              <div><strong>3:</strong> drei</div>
              <div><strong>4:</strong> vier</div>
              <div><strong>5:</strong> fünf</div>
              <div><strong>6:</strong> sechs</div>
              <div><strong>7:</strong> sieben</div>
              <div><strong>8:</strong> acht</div>
              <div><strong>9:</strong> neun</div>
              <div><strong>10:</strong> zehn</div>
              <div><strong>11:</strong> elf</div>
              <div><strong>12:</strong> zwölf</div>
            </div>

            <h3 class="mt-4">Numbers 13–19</h3>
            <p>Formed by taking the unit digit and adding <strong>-zehn</strong> (ten). Note small changes in 16 (sechzehn - drop 's') and 17 (siebzehn - drop 'en').</p>
            <ul>
              <li>13: drei<strong>zehn</strong></li>
              <li>14: vier<strong>zehn</strong></li>
              <li>15: fünf<strong>zehn</strong></li>
              <li>16: sech<strong>zehn</strong></li>
              <li>17: sieb<strong>zehn</strong></li>
              <li>18: acht<strong>zehn</strong></li>
              <li>19: neun<strong>zehn</strong></li>
            </ul>

            <h3 class="mt-4">Tens (Zwanzig, Dreißig...)</h3>
            <p>End in <strong>-zig</strong> (except 30 which ends in <strong>-ßig</strong>).</p>
            <ul>
              <li>20: zwanzig</li>
              <li>30: drei<strong>ßig</strong></li>
              <li>40: vierzig</li>
              <li>50: fünfzig</li>
              <li>60: sechzig (drop 's')</li>
              <li>70: siebzig (drop 'en')</li>
              <li>80: achtzig</li>
              <li>90: neunzig</li>
              <li>100: hundert</li>
            </ul>

            <h3 class="mt-4">The German Twist: Numbers 21–99</h3>
            <p class="accent-box">In German, you say the **ones digit first**, then **und** (and), then the **tens digit** (e.g. 21 is "one-and-twenty").</p>
            <ul>
              <li>21: ein<strong>und</strong>zwanzig (drop the 's' from 'eins')</li>
              <li>35: fünf<strong>und</strong>dreißig (five-and-thirty)</li>
              <li>48: acht<strong>und</strong>vierzig (eight-and-forty)</li>
              <li>77: sieben<strong>und</strong>siebzig</li>
              <li>99: neun<strong>und</strong>neunzig</li>
            </ul>
          `
        },
        {
          id: "m3-l2",
          title: "3.2 Telling Time (Uhrzeit)",
          type: "reading",
          content: `
            <h3>Asking the Time</h3>
            <ul>
              <li><strong>Wie spät ist es?</strong> (How late is it?)</li>
              <li><strong>Wie viel Uhr ist es?</strong> (What time is it?)</li>
            </ul>

            <h3 class="mt-4">1. Official Time (Offizielle Uhrzeit)</h3>
            <p>Used for train schedules, TV, and radio. It is written on a 24-hour clock. The structure is: <strong>[Hours] + Uhr + [Minutes]</strong>.</p>
            <ul>
              <li>08:00 &rarr; acht Uhr</li>
              <li>14:15 &rarr; vierzehn Uhr fünfzehn</li>
              <li>19:30 &rarr; neunzehn Uhr dreißig</li>
              <li>22:45 &rarr; zweiundzwanzig Uhr fünfundvierzig</li>
            </ul>

            <h3 class="mt-4">2. Conversational Time (Inoffizielle Uhrzeit)</h3>
            <p>Used with friends/family. Uses a 12-hour clock and prepositions <strong>vor</strong> (before/to), <strong>nach</strong> (after/past), and <strong>halb</strong> (half!).</p>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>German Conversational</th>
                    <th>Literal English translation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>10:05</td><td>fünf <strong>nach</strong> zehn</td><td>five past ten</td></tr>
                  <tr><td>10:15</td><td>Viertel <strong>nach</strong> zehn</td><td>quarter past ten</td></tr>
                  <tr><td>10:20</td><td>zwanzig <strong>nach</strong> zehn</td><td>twenty past ten</td></tr>
                  <tr><td>10:30</td><td><strong>halb elf</strong></td><td><strong>half eleven</strong> (halfway TO eleven!)</td></tr>
                  <tr><td>10:40</td><td>zwanzig <strong>vor</strong> elf</td><td>twenty to eleven</td></tr>
                  <tr><td>10:45</td><td>Viertel <strong>vor</strong> elf</td><td>quarter to eleven</td></tr>
                  <tr><td>10:55</td><td>fünf <strong>vor</strong> elf</td><td>five to eleven</td></tr>
                </tbody>
              </table>
            </div>
            <p class="accent-box">⚠️ **Caution with "halb"**: "halb sechs" means 5:30 (halfway TO six), NOT 6:30!</p>
          `
        },
        {
          id: "m3-l3",
          title: "3.3 Verbs: Conjugation & Separable Verbs",
          type: "reading",
          content: `
            <h3>Regular Present Tense Endings</h3>
            <p>To conjugate regular verbs, remove the infinitive ending <strong>-en</strong> and add the personal endings:</p>
            <p>Example: <strong>lernen</strong> (to learn/study) -> stem is <strong>lern-</strong></p>
            
            <table class="narrow-table">
              <tr><td>ich</td><td>lern-<strong>e</strong></td></tr>
              <tr><td>du</td><td>lern-<strong>st</strong></td></tr>
              <tr><td>er/sie/es</td><td>lern-<strong>t</strong></td></tr>
              <tr><td>wir</td><td>lern-<strong>en</strong></td></tr>
              <tr><td>ihr</td><td>lern-<strong>t</strong></td></tr>
              <tr><td>sie/Sie</td><td>lern-<strong>en</strong></td></tr>
            </table>

            <h3 class="mt-4">Irregular Verbs (Vowel Change)</h3>
            <p>Some verbs change their stem vowel, but <strong>only for "du" and "er/sie/es"</strong>!</p>
            <ul>
              <li><strong>e &rarr; i / ie</strong>:
                <ul>
                  <li><strong>geben</strong> (to give): ich gebe, <strong>du gibst, er gibt</strong>, wir geben...</li>
                  <li><strong>sehen</strong> (to see): ich sehe, <strong>du siehst, er sieht</strong>, wir sehen...</li>
                </ul>
              </li>
              <li><strong>a &rarr; ä</strong>:
                <ul>
                  <li><strong>fahren</strong> (to drive/travel): ich fahre, <strong>du fährst, er fährt</strong>, wir fahren...</li>
                </ul>
              </li>
            </ul>

            <h3 class="mt-4">Separable Verbs (Trennbare Verben)</h3>
            <p>German has verbs with prefixes that detach and go to the very <strong>end of the clause</strong> in the present tense!</p>
            <p>Example: <strong>einkaufen</strong> (to shop) &rarr; prefix <strong>ein-</strong>, core verb <strong>kaufen</strong>.</p>
            <ul>
              <li><em>Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>.</em> (I shop in the supermarket.)</li>
              <li><strong>aufstehen</strong> (to stand up/get up): <em>Wir <strong>stehen</strong> um 7 Uhr <strong>auf</strong>.</em></li>
              <li><strong>anrufen</strong> (to call on phone): <em>Er <strong>ruft</strong> seine Mutter <strong>an</strong>.</em></li>
            </ul>
          `
        }
      ],
      quizzes: [
        {
          question: "How do you say the number 54 in German?",
          options: [
            "fünfzigvier",
            "vierundfünfzig",
            "fünfundvierzig",
            "vierzigundfünf"
          ],
          answer: 1,
          explanation: "In German, 54 is expressed as 'four-and-fifty' = 'vierundfünfzig'."
        },
        {
          question: "What time is 'halb neun' in conversational German?",
          options: [
            "9:30",
            "8:30",
            "7:30",
            "9:00"
          ],
          answer: 2,
          explanation: "'halb' means halfway to the next hour. 'halb neun' means halfway to nine, which is 8:30."
        },
        {
          question: "What is the correct conjugation of 'fahren' (irregular verb) for 'du'?",
          options: [
            "fahrest",
            "fahrst",
            "fährst",
            "fährt"
          ],
          answer: 2,
          explanation: "'fahren' has a vowel change 'a' -> 'ä' in the 2nd and 3rd person singular. The ending is -st, so 'du fährst'."
        },
        {
          question: "Complete the sentence with the separable verb 'aufstehen': 'Er ___ jeden Morgen um 6 Uhr ___.'",
          options: [
            "aufsteht / --",
            "steht / auf",
            "steht / an",
            "stehe / auf"
          ],
          answer: 1,
          explanation: "For the separable verb 'aufstehen', the verb 'stehen' conjugates for 'er' (steht) and goes to the main verb position. The prefix 'auf' goes to the end: 'Er steht ... auf'."
        }
      ]
    },
    {
      id: "module-4",
      title: "Module 4: Familie, Essen & Einkaufen (Family, Food & Shopping)",
      description: "Learn vocabulary for relatives, groceries, restaurant visits, possessives, and how to use modal verbs.",
      lessons: [
        {
          id: "m4-l1",
          title: "4.1 Family & Possessive Articles",
          type: "reading",
          content: `
            <h3>Family Members (Familienmitglieder)</h3>
            <ul>
              <li><span class="gender-m">der Vater</span> (father) / <span class="gender-f">die Mutter</span> (mother) &rarr; <span class="gender-p">die Eltern</span> (parents)</li>
              <li><span class="gender-m">der Sohn</span> (son) / <span class="gender-f">die Tochter</span> (daughter) &rarr; <span class="gender-p">die Kinder</span> (children)</li>
              <li><span class="gender-m">der Bruder</span> (brother) / <span class="gender-f">die Schwester</span> (sister) &rarr; <span class="gender-p">die Geschwister</span> (siblings)</li>
              <li><span class="gender-m">der Großvater (Opa)</span> (grandfather) / <span class="gender-f">die Großmutter (Oma)</span> (grandmother) &rarr; <span class="gender-p">die Großeltern</span> (grandparents)</li>
            </ul>

            <h3 class="mt-4">Possessive Articles (my, your, his...)</h3>
            <p>Possessive articles specify ownership. They take endings depending on the gender of the noun that follows, matching the indefinite article (<strong>ein/eine</strong>) pattern.</p>
            
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Pronoun</th>
                    <th>Base Possessive</th>
                    <th>Before Masc. / Neut.</th>
                    <th>Before Fem. / Plural</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>ich (I)</td><td><strong>mein</strong></td><td>mein Vater / Buch</td><td>mein<strong>e</strong> Mutter / Kinder</td></tr>
                  <tr><td>du (you)</td><td><strong>dein</strong></td><td>dein Vater / Buch</td><td>dein<strong>e</strong> Mutter / Kinder</td></tr>
                  <tr><td>er (he) / es (it)</td><td><strong>sein</strong></td><td>sein Vater / Buch</td><td>sein<strong>e</strong> Mutter / Kinder</td></tr>
                  <tr><td>sie (she)</td><td><strong>ihr</strong></td><td>ihr Vater / Buch</td><td>ihr<strong>e</strong> Mutter / Kinder</td></tr>
                  <tr><td>wir (we)</td><td><strong>unser</strong></td><td>unser Vater / Buch</td><td>unser<strong>e</strong> Mutter / Kinder</td></tr>
                  <tr><td>ihr (you pl.)</td><td><strong>euer</strong></td><td>euer Vater / Buch</td><td>eur<strong>e</strong> Mutter / Kinder (drop 'e')</td></tr>
                  <tr><td>sie (they) / Sie (formal)</td><td><strong>ihr / Ihr</strong></td><td>ihr / Ihr Vater</td><td>ihr<strong>e</strong> / Ihr<strong>e</strong> Mutter</td></tr>
                </tbody>
              </table>
            </div>
            
            <p class="accent-box">⚠️ **Note on Accusative case**: Possessive articles follow the standard article declension rules. So in the Accusative, masculine possessive articles change: <em>Ich liebe mein<strong>en</strong> Vater.</em> (I love my father - Accusative Masculine).</p>
          `
        },
        {
          id: "m4-l2",
          title: "4.2 Food & Shopping Phrases",
          type: "reading",
          content: `
            <h3>Food & Drinks Vocabulary</h3>
            <div class="columns-2">
              <div>
                <h4>Foods (Essen)</h4>
                <ul>
                  <li><span class="gender-m">der Apfel</span> (apple)</li>
                  <li><span class="gender-f">die Banane</span> (banana)</li>
                  <li><span class="gender-n">das Brot</span> (bread)</li>
                  <li><span class="gender-n">das Fleisch</span> (meat)</li>
                  <li><span class="gender-n">das Gemüse</span> (vegetables)</li>
                  <li><span class="gender-m">der Käse</span> (cheese)</li>
                </ul>
              </div>
              <div>
                <h4>Drinks (Getränke)</h4>
                <ul>
                  <li><span class="gender-m">der Kaffee</span> (coffee)</li>
                  <li><span class="gender-m">der Tee</span> (tea)</li>
                  <li><span class="gender-n">das Wasser</span> (water)</li>
                  <li><span class="gender-f">die Milch</span> (milk)</li>
                  <li><span class="gender-m">der Saft</span> (juice)</li>
                  <li><span class="gender-n">das Bier</span> (beer)</li>
                </ul>
              </div>
            </div>

            <h3 class="mt-4">At the Supermarket (Im Supermarkt)</h3>
            <ul>
              <li><strong>Was kostet das?</strong> (What does that cost?)</li>
              <li><strong>Das kostet 2 Euro 50.</strong> (That costs €2.50.)</li>
              <li><strong>Ich suche Tomaten. Wo sind sie?</strong> (I'm looking for tomatoes. Where are they?)</li>
              <li><strong>Haben Sie Brot?</strong> (Do you have bread?)</li>
            </ul>

            <h3 class="mt-4">At the Restaurant (Im Restaurant)</h3>
            <div class="chat-container">
              <div class="chat-bubble partner">
                <span class="chat-speaker">Kellner:</span> Guten Tag! Was möchten Sie bestellen?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Kunde (You):</span> Ich möchte bitte ein Schnitzel und ein Mineralwasser.
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Kellner:</span> Gerne. Sonst noch etwas?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Kunde (You):</span> Nein, danke. Das ist alles.
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">...später...</span>  
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Kunde (You):</span> Zahlen, bitte! / Ich möchte bezahlen.
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Kellner:</span> Zusammen oder getrennt? (Together or separate?)
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Kunde (You):</span> Zusammen, bitte. (Together, please.)
              </div>
            </div>
          `
        },
        {
          id: "m4-l3",
          title: "4.3 Modal Verbs: möchte, kann, muss",
          type: "reading",
          content: `
            <h3>What are Modal Verbs?</h3>
            <p>Modal verbs express ability, obligation, or permission. They conjugate uniquely, and place the **second verb in the infinitive at the absolute end of the sentence**.</p>
            <p>Example: <em>Ich <strong>kann</strong> Deutsch <strong>sprechen</strong>.</em> (I can speak German.)</p>

            <h3 class="mt-4">Key Modal Verbs for A1</h3>
            
            <div class="columns-3">
              <div>
                <h5>1. <strong>können</strong> (can/to be able)</h5>
                <table class="narrow-table tiny-text">
                  <tr><td>ich</td><td><strong>kann</strong></td></tr>
                  <tr><td>du</td><td><strong>kannst</strong></td></tr>
                  <tr><td>er/sie/es</td><td><strong>kann</strong></td></tr>
                  <tr><td>wir</td><td><strong>können</strong></td></tr>
                  <tr><td>ihr</td><td><strong>könnt</strong></td></tr>
                  <tr><td>sie/Sie</td><td><strong>können</strong></td></tr>
                </table>
              </div>
              <div>
                <h5>2. <strong>müssen</strong> (must/have to)</h5>
                <table class="narrow-table tiny-text">
                  <tr><td>ich</td><td><strong>muss</strong></td></tr>
                  <tr><td>du</td><td><strong>musst</strong></td></tr>
                  <tr><td>er/sie/es</td><td><strong>muss</strong></td></tr>
                  <tr><td>wir</td><td><strong>müssen</strong></td></tr>
                  <tr><td>ihr</td><td><strong>müsst</strong></td></tr>
                  <tr><td>sie/Sie</td><td><strong>müssen</strong></td></tr>
                </table>
              </div>
              <div>
                <h5>3. <strong>möchten</strong> (would like)</h5>
                <table class="narrow-table tiny-text">
                  <tr><td>ich</td><td><strong>möchte</strong></td></tr>
                  <tr><td>du</td><td><strong>möchtest</strong></td></tr>
                  <tr><td>er/sie/es</td><td><strong>möchte</strong></td></tr>
                  <tr><td>wir</td><td><strong>möchten</strong></td></tr>
                  <tr><td>ihr</td><td><strong>möchtet</strong></td></tr>
                  <tr><td>sie/Sie</td><td><strong>möchten</strong></td></tr>
                </table>
              </div>
            </div>

            <p class="accent-box mt-3">💡 **Note**: The 'ich' and 'er/sie/es' conjugations are always identical for modal verbs!</p>

            <h3 class="mt-4">Sentence Structure Examples</h3>
            <ul>
              <li>Ich <strong>muss</strong> heute Hausaufgaben <strong>machen</strong>. (I have to do homework today.)</li>
              <li><strong>Kannst</strong> du mir <strong>helfen</strong>? (Can you help me?)</li>
              <li>Wir <strong>möchten</strong> einen Kaffee <strong>trinken</strong>. (We would like to drink a coffee.)</li>
            </ul>
          `
        }
      ],
      quizzes: [
        {
          question: "Translate: 'This is my sister.' (Sister is feminine: 'die Schwester')",
          options: [
            "Das ist mein Schwester.",
            "Das ist meine Schwester.",
            "Das ist meinen Schwester.",
            "Das ist deines Schwester."
          ],
          answer: 1,
          explanation: "'Schwester' is feminine, so the possessive article 'mein' takes the feminine ending -e: 'meine'."
        },
        {
          question: "What is the meaning of the question 'Zahlen, bitte!' in a restaurant?",
          options: [
            "Count the numbers, please!",
            "The bill, please!",
            "Bring me food, please!",
            "What is the cost?"
          ],
          answer: 1,
          explanation: "'Zahlen, bitte!' is the idiomatic phrase used to ask for the bill (literally, 'paying, please!')."
        },
        {
          question: "Which of the following is correct German syntax?",
          options: [
            "Ich kann sprechen Deutsch.",
            "Ich kann Deutsch sprechen.",
            "Ich sprechen Deutsch kann.",
            "Sprechen ich kann Deutsch."
          ],
          answer: 1,
          explanation: "In sentences with modal verbs (kann), the second verb in the infinitive (sprechen) is pushed to the very end of the sentence."
        },
        {
          question: "Conjugate 'müssen': 'Ihr ___ heute Deutsch lernen.'",
          options: [
            "muss",
            "müsst",
            "musst",
            "müssen"
          ],
          answer: 1,
          explanation: "The conjugation of 'müssen' for the plural pronoun 'ihr' (you all) is 'müsst'."
        }
      ]
    },
    {
      id: "module-5",
      title: "Module 5: Wegbeschreibung & Unterkunft (Directions & Accommodation)",
      description: "Ask for directions, navigate the city, book a hotel, and learn basic prepositions.",
      lessons: [
        {
          id: "m5-l1",
          title: "5.1 Navigating the City (In der Stadt)",
          type: "reading",
          content: `
            <h3>City Locations (Orte in der Stadt)</h3>
            <ul>
              <li><span class="gender-m">der Bahnhof</span> (train station)</li>
              <li><span class="gender-m">der Flughafen</span> (airport)</li>
              <li><span class="gender-f">die Post</span> (post office)</li>
              <li><span class="gender-f">die Kirche</span> (church)</li>
              <li><span class="gender-n">das Hotel</span> (hotel)</li>
              <li><span class="gender-n">das Krankenhaus</span> (hospital)</li>
              <li><span class="gender-f">die Haltestelle</span> (bus/tram stop)</li>
            </ul>

            <h3 class="mt-4">Asking for Directions (Wegbeschreibung)</h3>
            <div class="dialogue-block">
              <ul>
                <li><strong>Entschuldigung, wo ist der Bahnhof?</strong> (Excuse me, where is the train station?)</li>
                <li><strong>Gibt es einen Supermarkt in der Nähe?</strong> (Is there a supermarket nearby?)</li>
                <li><strong>Wie komme ich zum Flughafen?</strong> (How do I get to the airport?)</li>
              </ul>
            </div>

            <h3 class="mt-4">Giving Directions (Wegbeschreibung geben)</h3>
            <ul>
              <li><strong>Gehen Sie geradeaus.</strong> (Go straight ahead.)</li>
              <li><strong>Biegen Sie rechts ab.</strong> (Turn right.)</li>
              <li><strong>Biegen Sie links ab.</strong> (Turn left.)</li>
              <li><strong>Nehmen Sie die erste Straße rechts.</strong> (Take the first street on the right.)</li>
            </ul>
          `
        },
        {
          id: "m5-l2",
          title: "5.2 Hotel & Booking Phrases",
          type: "reading",
          content: `
            <h3>Booking a Room (Ein Zimmer buchen)</h3>
            <p>Important phrases when checking into a hotel or hostel in Germany.</p>

            <div class="chat-container">
              <div class="chat-bubble partner">
                <span class="chat-speaker">Rezeptionist:</span> Guten Tag! Kann ich Ihnen helfen?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Gast (You):</span> Guten Tag. Ich habe ein Zimmer reserviert. Mein Name ist Miller.
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Rezeptionist:</span> Ah, ja, Herr Miller. Ein Einzelzimmer (single room) für zwei Nächte?
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Gast (You):</span> Richtig. Ist das Frühstück inklusive? (Is breakfast included?)
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Rezeptionist:</span> Ja, das Frühstück ist von 7 bis 10 Uhr. Hier ist Ihr Schlüssel, Zimmer 204.
              </div>
              <div class="chat-bubble self">
                <span class="chat-speaker">Gast (You):</span> Vielen Dank! Wo ist der Aufzug? (Where is the elevator?)
              </div>
              <div class="chat-bubble partner">
                <span class="chat-speaker">Rezeptionist:</span> Der Aufzug ist dort drüben auf der linken Seite.
              </div>
            </div>

            <h3 class="mt-4">Key Terms</h3>
            <ul>
              <li><strong>das Einzelzimmer</strong> (single room)</li>
              <li><strong>das Doppelzimmer</strong> (double room)</li>
              <li><strong>die Kreditkarte</strong> (credit card)</li>
              <li><strong>der Schlüssel</strong> (key)</li>
              <li><strong>das Formular</strong> (form - to fill out at registration)</li>
            </ul>
          `
        },
        {
          id: "m5-l3",
          title: "5.3 Basic Prepositions of Place",
          type: "reading",
          content: `
            <h3>Two-Way Prepositions (Wechselpräpositionen)</h3>
            <p>These prepositions describe locations. They can trigger either **Dative** (showing static position / "where?") or **Accusative** (showing movement / "where to?"). At A1, we focus on static locations using the **Dative case**.</p>
            
            <div class="vocab-grid">
              <div><strong>in:</strong> in/inside</div>
              <div><strong>an:</strong> on/at (vertical border, e.g. wall)</div>
              <div><strong>auf:</strong> on top of (horizontal surface)</div>
              <div><strong>unter:</strong> under</div>
              <div><strong>über:</strong> above/over</div>
              <div><strong>neben:</strong> next to</div>
              <div><strong>vor:</strong> in front of</div>
              <div><strong>hinter:</strong> behind</div>
              <div><strong>zwischen:</strong> between</div>
            </div>

            <h3 class="mt-4">Static Dative Short-forms</h3>
            <p>When stating where something is static, masculine/neuter Dative combines with the prepositions:</p>
            <ul>
              <li><strong>in + dem &rarr; im</strong> (e.g., <em>Ich bin <strong>im</strong> Hotel.</em> - I am in the hotel.)</li>
              <li><strong>an + dem &rarr; am</strong> (e.g., <em>Wir treffen uns <strong>am</strong> Bahnhof.</em> - We meet at the station.)</li>
              <li><strong>bei + dem &rarr; beim</strong> (at the place of/near, e.g., <em>beim Arzt</em> - at the doctor's)</li>
              <li><strong>zu + dem &rarr; zum</strong> (to the - masculine/neuter)</li>
              <li><strong>zu + der &rarr; zur</strong> (to the - feminine)</li>
            </ul>

            <h3 class="mt-4">Examples</h3>
            <ul>
              <li>Der Schlüssel liegt <strong>auf dem</strong> Tisch. (The key lies on the table.)</li>
              <li>Das Hotel ist <strong>neben der</strong> Post. (The hotel is next to the post office.)</li>
              <li>Ich gehe <strong>zur</strong> Haltestelle. (I am going to the bus stop.)</li>
            </ul>
          `
        }
      ],
      quizzes: [
        {
          question: "How do you ask 'Where is the train station?' in German?",
          options: [
            "Wo ist der Flughafen?",
            "Wo ist der Bahnhof?",
            "Wo ist das Hotel?",
            "Wie komme ich nach Hause?"
          ],
          answer: 1,
          explanation: "'Bahnhof' means train station. Therefore, 'Wo ist der Bahnhof?' is the correct question."
        },
        {
          question: "What is the meaning of 'Gehen Sie geradeaus'?",
          options: [
            "Turn left",
            "Turn right",
            "Go straight ahead",
            "Take the bus"
          ],
          answer: 2,
          explanation: "'Geradeaus' means straight ahead, so the phrase translates to 'Go straight ahead'."
        },
        {
          question: "Combine the preposition and article: 'in + dem (neuter/masculine dative)'",
          options: [
            "ins",
            "am",
            "im",
            "zur"
          ],
          answer: 2,
          explanation: "'in + dem' contracts to 'im' (e.g. im Zimmer, im Hotel). 'in + das' contracts to 'ins' (accusative motion)."
        },
        {
          question: "Translate: 'The hotel is next to the train station.' (next to = neben; train station = der Bahnhof, which changes to 'dem Bahnhof' in Dative)",
          options: [
            "Das Hotel ist neben den Bahnhof.",
            "Das Hotel ist neben der Bahnhof.",
            "Das Hotel ist neben dem Bahnhof.",
            "Das Hotel ist im Bahnhof."
          ],
          answer: 2,
          explanation: "'neben' takes Dative for static location. Masculine 'der Bahnhof' becomes 'dem Bahnhof' in Dative, so 'neben dem Bahnhof' is correct."
        }
      ]
    }
  ],

  // Vocabulary trainer flashcards (200+ words target, let's make a rich selection of essential A1 vocabulary)
  vocabulary: [
    // Greetings & Basics
    { word: "hallo", type: "phrase", article: "", plural: "", translation: "hello", example: "Hallo, wie geht's?", exampleTranslation: "Hello, how are you?", category: "Basics" },
    { word: "danke", type: "phrase", article: "", plural: "", translation: "thank you", example: "Danke für die Hilfe.", exampleTranslation: "Thank you for the help.", category: "Basics" },
    { word: "bitte", type: "phrase", article: "", plural: "", translation: "please / you're welcome", example: "Ein Bier, bitte.", exampleTranslation: "A beer, please.", category: "Basics" },
    { word: "ja", type: "phrase", article: "", plural: "", translation: "yes", example: "Ja, ich spreche Deutsch.", exampleTranslation: "Yes, I speak German.", category: "Basics" },
    { word: "nein", type: "phrase", article: "", plural: "", translation: "no", example: "Nein, danke.", exampleTranslation: "No, thank you.", category: "Basics" },
    { word: "Name", type: "noun", article: "der", plural: "Namen", translation: "name", example: "Mein Name ist John.", exampleTranslation: "My name is John.", category: "Basics" },
    { word: "Land", type: "noun", article: "das", plural: "Länder", translation: "country", example: "Aus welchem Land kommen Sie?", exampleTranslation: "Which country do you come from?", category: "Basics" },
    { word: "Sprache", type: "noun", article: "die", plural: "Sprachen", translation: "language", example: "Welche Sprachen sprechen Sie?", exampleTranslation: "Which languages do you speak?", category: "Basics" },
    { word: "heißen", type: "verb", article: "", plural: "", translation: "to be called", example: "Ich heiße Sarah.", exampleTranslation: "I am called Sarah.", category: "Basics" },
    { word: "wohnen", type: "verb", article: "", plural: "", translation: "to live / reside", example: "Ich wohne in Frankfurt.", exampleTranslation: "I live in Frankfurt.", category: "Basics" },
    { word: "kommen", type: "verb", article: "", plural: "", translation: "to come", example: "Er kommt aus Spanien.", exampleTranslation: "He comes from Spain.", category: "Basics" },
    
    // Nouns & Articles (Objects)
    { word: "Buch", type: "noun", article: "das", plural: "Bücher", translation: "book", example: "Das Buch ist spannend.", exampleTranslation: "The book is exciting.", category: "Objects" },
    { word: "Tisch", type: "noun", article: "der", plural: "Tische", translation: "table", example: "Der Stift liegt auf dem Tisch.", exampleTranslation: "The pen lies on the table.", category: "Objects" },
    { word: "Stuhl", type: "noun", article: "der", plural: "Stühle", translation: "chair", example: "Der Stuhl ist bequem.", exampleTranslation: "The chair is comfortable.", category: "Objects" },
    { word: "Tasche", type: "noun", article: "die", plural: "Taschen", translation: "bag / pocket", example: "Ist das deine Tasche?", exampleTranslation: "Is that your bag?", category: "Objects" },
    { word: "Handy", type: "noun", article: "das", plural: "Handys", translation: "mobile phone", example: "Wo ist mein Handy?", exampleTranslation: "Where is my mobile phone?", category: "Objects" },
    { word: "Schlüssel", type: "noun", article: "der", plural: "Schlüssel", translation: "key", example: "Ich kann meinen Schlüssel nicht finden.", exampleTranslation: "I cannot find my key.", category: "Objects" },
    { word: "Stift", type: "noun", article: "der", plural: "Stifte", translation: "pen", example: "Hast du einen Stift für mich?", exampleTranslation: "Do you have a pen for me?", category: "Objects" },
    { word: "Fahrrad", type: "noun", article: "das", plural: "Fahrräder", translation: "bicycle", example: "Ich fahre mit dem Fahrrad.", exampleTranslation: "I ride by bicycle.", category: "Objects" },
    { word: "Auto", type: "noun", article: "das", plural: "Autos", translation: "car", example: "Mein Auto ist blau.", exampleTranslation: "My car is blue.", category: "Objects" },
    { word: "Zeitung", type: "noun", article: "die", plural: "Zeitungen", translation: "newspaper", example: "Er liest jeden Morgen die Zeitung.", exampleTranslation: "He reads the newspaper every morning.", category: "Objects" },

    // Daily Life & Time
    { word: "Tag", type: "noun", article: "der", plural: "Tage", translation: "day", example: "Einen schönen Tag noch!", exampleTranslation: "Have a nice day!", category: "Time" },
    { word: "Woche", type: "noun", article: "die", plural: "Wochen", translation: "week", example: "Die Woche hat sieben Tage.", exampleTranslation: "The week has seven days.", category: "Time" },
    { word: "Uhrzeit", type: "noun", article: "die", plural: "Uhrzeiten", translation: "time (of day)", example: "Wie ist die genaue Uhrzeit?", exampleTranslation: "What is the exact time?", category: "Time" },
    { word: "morgen", type: "adverb", article: "", plural: "", translation: "tomorrow", example: "Morgen gehe ich einkaufen.", exampleTranslation: "Tomorrow I will go shopping.", category: "Time" },
    { word: "heute", type: "adverb", article: "", plural: "", translation: "today", example: "Heute ist das Wetter gut.", exampleTranslation: "Today the weather is good.", category: "Time" },
    { word: "gestern", type: "adverb", article: "", plural: "", translation: "yesterday", example: "Gestern war ich müde.", exampleTranslation: "Yesterday I was tired.", category: "Time" },
    { word: "arbeiten", type: "verb", article: "", plural: "", translation: "to work", example: "Ich arbeite bei einer Bank.", exampleTranslation: "I work at a bank.", category: "Daily Life" },
    { word: "schlafen", type: "verb", article: "", plural: "", translation: "to sleep", example: "Das Kind schläft schon.", exampleTranslation: "The child is already sleeping.", category: "Daily Life" },
    { word: "frühstücken", type: "verb", article: "", plural: "", translation: "to eat breakfast", example: "Wir frühstücken um 8 Uhr.", exampleTranslation: "We eat breakfast at 8 o'clock.", category: "Daily Life" },
    { word: "Freizeit", type: "noun", article: "die", plural: "", translation: "free time / leisure", example: "Was machst du in deiner Freizeit?", exampleTranslation: "What do you do in your free time?", category: "Daily Life" },

    // Family, Food & Shopping
    { word: "Familie", type: "noun", article: "die", plural: "Familien", translation: "family", example: "Meine Familie lebt in Hamburg.", exampleTranslation: "My family lives in Hamburg.", category: "Family" },
    { word: "Kind", type: "noun", article: "das", plural: "Kinder", translation: "child", example: "Sie haben zwei Kinder.", exampleTranslation: "They have two children.", category: "Family" },
    { word: "Brot", type: "noun", article: "das", plural: "Brote", translation: "bread", example: "Ich kaufe frisches Brot.", exampleTranslation: "I buy fresh bread.", category: "Food" },
    { word: "Wasser", type: "noun", article: "das", plural: "Wässer", translation: "water", example: "Ein Glas Wasser, bitte.", exampleTranslation: "A glass of water, please.", category: "Food" },
    { word: "essen", type: "verb", article: "", plural: "", translation: "to eat", example: "Was isst du zum Mittag?", exampleTranslation: "What are you eating for lunch?", category: "Food" },
    { word: "trinken", type: "verb", article: "", plural: "", translation: "to drink", example: "Ich trinke gerne Orangensaft.", exampleTranslation: "I like to drink orange juice.", category: "Food" },
    { word: "kaufen", type: "verb", article: "", plural: "", translation: "to buy", example: "Ich kaufe einen neuen Mantel.", exampleTranslation: "I am buying a new coat.", category: "Shopping" },
    { word: "Supermarkt", type: "noun", article: "der", plural: "Supermärkte", translation: "supermarket", example: "Wo ist der nächste Supermarkt?", exampleTranslation: "Where is the nearest supermarket?", category: "Shopping" },
    { word: "teuer", type: "adjective", article: "", plural: "", translation: "expensive", example: "Das Hotel ist zu teuer.", exampleTranslation: "The hotel is too expensive.", category: "Shopping" },
    { word: "billig", type: "adjective", article: "", plural: "", translation: "cheap", example: "Dieses Buch ist sehr billig.", exampleTranslation: "This book is very cheap.", category: "Shopping" },

    // Directions & Travel
    { word: "Bahnhof", type: "noun", article: "der", plural: "Bahnhöfe", translation: "train station", example: "Der Zug kommt am Bahnhof an.", exampleTranslation: "The train arrives at the station.", category: "Directions" },
    { word: "Straße", type: "noun", article: "die", plural: "Straßen", translation: "street / road", example: "Wie heißt diese Straße?", exampleTranslation: "What is this street called?", category: "Directions" },
    { word: "rechts", type: "adverb", article: "", plural: "", translation: "on the right / right", example: "Biegen Sie rechts ab.", exampleTranslation: "Turn right.", category: "Directions" },
    { word: "links", type: "adverb", article: "", plural: "", translation: "on the left / left", example: "Das Geschäft ist auf der linken Seite.", exampleTranslation: "The shop is on the left side.", category: "Directions" },
    { word: "geradeaus", type: "adverb", article: "", plural: "", translation: "straight ahead", example: "Gehen Sie immer geradeaus.", exampleTranslation: "Always go straight ahead.", category: "Directions" },
    { word: "Fahrkarte", type: "noun", article: "die", plural: "Fahrkarten", translation: "ticket", example: "Haben Sie eine Fahrkarte?", exampleTranslation: "Do you have a ticket?", category: "Travel" },
    { word: "Zimmer", type: "noun", article: "das", plural: "Zimmer", translation: "room", example: "Das Zimmer ist sauber.", exampleTranslation: "The room is clean.", category: "Travel" },
    { word: "Karte", type: "noun", article: "die", plural: "Karten", translation: "card / map", example: "Ich zahle mit Karte.", exampleTranslation: "I pay by card.", category: "Travel" },
    { word: "suchen", type: "verb", article: "", plural: "", translation: "to search / look for", example: "Ich suche den Ausgang.", exampleTranslation: "I am looking for the exit.", category: "Travel" },
    { word: "finden", type: "verb", article: "", plural: "", translation: "to find", example: "Ich kann den Weg nicht finden.", exampleTranslation: "I cannot find the way.", category: "Travel" }
  ],

  // Goethe A1 Mock Exam Mockup
  mockExam: {
    title: "Goethe-Zertifikat A1: Start Deutsch 1 Mock Exam",
    durationMinutes: 65,
    passingScore: 60, // Out of 100
    sections: [
      {
        id: "hoeren",
        title: "Teil 1: Hören (Listening Comprehension)",
        description: "Listen to the following German audio tracks (using Text-to-Speech) and select the correct visual or textual option.",
        questions: [
          {
            id: "h1",
            audioText: "Entschuldigung, Herr Becker. Wie viel kostet diese Tasche hier? - Sie kostet achtunddreißig Euro, junge Frau. - Oh, das ist günstig, ich nehme sie.",
            question: "How much does the bag cost?",
            options: [
              "18 Euro",
              "38 Euro",
              "80 Euro",
              "48 Euro"
            ],
            answer: 1,
            audioSnippet: "Entschuldigung, Herr Becker. Wie viel kostet diese Tasche hier? Sie kostet achtunddreißig Euro, junge Frau.",
            explanation: "The merchant says 'achtunddreißig' which translates to 38."
          },
          {
            id: "h2",
            audioText: "Hallo Peter, treffen wir uns morgen? - Ja gerne, hast du am Nachmittag Zeit? - Nein, leider erst am Abend, sagen wir um halb acht? - Ja, das passt mir gut.",
            question: "At what time do Peter and his friend meet?",
            options: [
              "08:30 Uhr",
              "18:30 Uhr",
              "19:30 Uhr",
              "07:30 Uhr"
            ],
            answer: 2,
            audioSnippet: "Treffen wir uns morgen? Sagen wir um halb acht am Abend? Ja, das passt mir gut.",
            explanation: "'halb acht am Abend' means 7:30 PM (halfway to eight in the evening), which is written in official 24h format as 19:30."
          },
          {
            id: "h3",
            audioText: "Guten Tag, Herr Weber. Gehen Sie heute zum Bahnhof? - Nein, ich muss zum Flughafen fahren. Meine Schwester kommt heute aus Paris an. Ich fahre mit der U-Bahn.",
            question: "Where is Herr Weber going today?",
            options: [
              "Zum Bahnhof",
              "Zum Flughafen",
              "Zur Schule",
              "Nach Paris"
            ],
            answer: 1,
            audioSnippet: "Gehen Sie heute zum Bahnhof? Nein, ich muss zum Flughafen fahren. Meine Schwester kommt heute aus Paris an.",
            explanation: "Herr Weber explicitly says 'Nein, ich muss zum Flughafen fahren'."
          }
        ]
      },
      {
        id: "lesen",
        title: "Teil 2: Lesen (Reading Comprehension)",
        description: "Read the German text messages, emails, and advertisements, and select the correct statement.",
        questions: [
          {
            id: "l1",
            text: `
              <strong>E-Mail von: Maria Schmidt</strong><br>
              Lieber John,<br>
              ich lade dich herzlich zu meiner Geburtstagsparty am Samstag ein. Wir feiern ab 19:00 Uhr in meinem Garten. Bringe bitte etwas zu trinken mit! Essen gibt es genug.<br>
              Viele Grüße, Maria
            `,
            question: "Select the true statement according to the email:",
            options: [
              "Maria celebrates her birthday on Friday.",
              "John must bring food to the party.",
              "The party starts in the evening at 7:00 PM.",
              "The party takes place in John's garden."
            ],
            answer: 2,
            explanation: "The email states they celebrate at 19:00 (which is 7:00 PM) on Saturday, in Maria's garden, and John needs to bring drinks, not food."
          },
          {
            id: "l2",
            text: `
              <strong>Aushang am Bahnhof Berlin:</strong><br>
              Achtung Fahrgäste! Wegen Gleisarbeiten fährt der Zug IC 2045 nach München heute nicht von Gleis 4, sondern von Gleis 12 ab. Die Abfahrtszeit verschiebt sich um 15 Minuten auf 14:30 Uhr.
            `,
            question: "What should passengers of IC 2045 do?",
            options: [
              "Go to Gleis 4 at 14:15.",
              "Go to Gleis 12 at 14:30.",
              "Take a bus to Munich.",
              "Buy a new ticket at Gleis 12."
            ],
            answer: 1,
            explanation: "The train departs from Gleis 12 today, and the time is shifted by 15 mins to 14:30."
          }
        ]
      },
      {
        id: "schreiben",
        title: "Teil 3: Schreiben (Form Filling & Communication)",
        description: "Review client profiles and fill out forms, or match parts of letters.",
        questions: [
          {
            id: "s1",
            text: `
              <strong>Profile:</strong> Clara Dupont (32, from France) wants to book a single room at 'Hotel Krone' in Vienna for 3 nights. She arrives on July 10th. Her email is clara@dupont.fr. She is traveling alone.
            `,
            question: "Based on Clara's profile, what should be filled in the 'Anzahl der Personen' (Number of people) field on the hotel registration form?",
            options: [
              "3",
              "32",
              "1",
              "Frankreich"
            ],
            answer: 2,
            explanation: "'Anzahl der Personen' means number of people. Since she is booking a single room and traveling alone, the answer is 1."
          },
          {
            id: "s2",
            text: `
              <strong>Form field: 'Ankunftsdatum'</strong>
            `,
            question: "What does 'Ankunftsdatum' mean on the hotel form?",
            options: [
              "Date of departure",
              "Number of nights",
              "Date of arrival",
              "Date of birth"
            ],
            answer: 2,
            explanation: "'Ankunftsdatum' translates to arrival date (Ankunft = arrival, Datum = date)."
          }
        ]
      },
      {
        id: "sprechen",
        title: "Teil 4: Sprechen Practice (Speaking Preparation)",
        description: "Goethe A1 Sprechen has 3 parts: self-introduction, asking questions with keywords, and formulating requests/commands. Practice these phrases.",
        isInfoOnly: true,
        cards: [
          {
            part: "Sprechen Teil 1: Sich vorstellen (Introduce yourself)",
            guide: "You must state: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.",
            example: `
              <ul>
                <li><strong>Name:</strong> Ich heiße [Ihr Name].</li>
                <li><strong>Alter:</strong> Ich bin [z.B. dreißig] Jahre alt.</li>
                <li><strong>Land:</strong> Ich komme aus [z.B. Kanada].</li>
                <li><strong>Wohnort:</strong> Ich wohne in [z.B. Toronto].</li>
                <li><strong>Sprachen:</strong> Ich spreche Englisch und ein bisschen Deutsch.</li>
                <li><strong>Beruf:</strong> Ich bin Ingenieur / Student.</li>
                <li><strong>Hobby:</strong> Meine Hobbys sind Lesen und Schwimmen.</li>
              </ul>
            `
          },
          {
            part: "Sprechen Teil 2: Thema: Essen & Trinken (Ask and Answer)",
            guide: "Draw a card with a keyword and ask your partner a question, then answer theirs.",
            example: `
              <ul>
                <li>Keyword: <strong>Brot</strong> &rarr; <em>Frage:</em> Essen Sie gerne Brot? &rarr; <em>Antwort:</em> Ja, ich esse jeden Morgen Brot.</li>
                <li>Keyword: <strong>Bier</strong> &rarr; <em>Frage:</em> Trinken Sie Bier? &rarr; <em>Antwort:</em> Nein, ich trinke lieber Wein.</li>
              </ul>
            `
          },
          {
            part: "Sprechen Teil 3: Bitten und Antworten (Requests and Replies)",
            guide: "Formulate a request/command based on a picture card and reply politely.",
            example: `
              <ul>
                <li>Picture: <strong>A glass of water</strong> &rarr; <em>Bitte:</em> Ein Glas Wasser, bitte! / Könnten Sie mir bitte ein Wasser bringen? &rarr; <em>Antwort:</em> Ja, gerne. Bitte schön!</li>
                <li>Picture: <strong>A closed window</strong> &rarr; <em>Bitte:</em> Machen Sie das Fenster bitte auf? &rarr; <em>Antwort:</em> Natürlich, ich mache es sofort auf.</li>
              </ul>
            `
          }
        ]
      }
    ]
  }
};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.GERMAN_A1_DATA = GERMAN_A1_DATA;
}
