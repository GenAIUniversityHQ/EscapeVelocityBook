/**
 * Book Content Data Structure
 *
 * HOW TO UPDATE THE BOOK:
 * 1. Each chapter is an object in the BOOK_CONTENT.chapters array
 * 2. Content supports HTML formatting (p, h2, h3, ul, ol, blockquote, table, etc.)
 * 3. To add videos, use the video-embed class with data-video-id attribute
 * 4. To add info boxes, use the info-box class
 * 5. Simply edit the content strings below to update the book
 */

const BOOK_CONTENT = {
    title: "Escape Velocity from Human Aging",
    subtitle: "A Journey into the Future of Longevity",
    authors: ["Dr. Vincent Giampapa", "Dr. Urzola"],
    publisher: "RMI - Regenerative Medicine Institute",

    chapters: [
        {
            id: "prelude",
            number: "",
            title: "Prelude",
            subtitle: "A Message from the Medical Team of RMI",
            content: `
                <h1>Prelude</h1>
                <h2>A Message from the Medical Team of RMI in San Jose, Costa Rica to the World</h2>

                <p>We have been conditioned to believe that the one thing you cannot buy is <strong>time</strong> and <strong>health</strong> — the two most important assets we all have.</p>

                <p>Well, that is no longer true. And we want to tell you why.</p>

                <p>There is a way to obtain those two most precious assets. Even now.</p>

                <p>First, we can slow the speed at which we are aging. Most of us are aging faster than we should, based on our biology and genetics. This condition is called <strong>Accelerated Aging Disorder</strong> — and we can slow it down. We can do it now.</p>

                <blockquote>
                    <p>What does this mean for you? It could mean an additional ten to fifteen years of excellent quality of life and function.</p>
                </blockquote>

                <p>Then comes the next step: the cure to the terminal disease we all carry — the disease of aging itself. This cure is something we can look forward to within our lifetime.</p>

                <h3>What is the cure, and how does it work?</h3>

                <p>The answers have been hidden in secrets for eons. And we know these secrets. Do you want to know them? We can help anyone who wants to learn.</p>

                <p>It is about the rules that can control the fatal disease every one of us carries — the disease called aging.</p>

                <p>We have seen the effects and power of these secrets on our patients, and in specific individuals in different locations around the world, for years. This has made us believers.</p>

                <div class="info-box key-point">
                    <div class="info-box-title">The Payoff</div>
                    <p>An extra decade of time — even now — with youthful function and enhanced health. Time to do the things we love to do and be with the people we love.</p>
                </div>

                <h3>The Transformation We Have Witnessed</h3>

                <p>The patients who come to us arrive with questions. Some come skeptical, having been told by mainstream medicine that decline is normal, that nothing can be done, that they should simply accept the slow erosion of their capabilities.</p>

                <p>What they share is a desire for more. More energy. More clarity. More function. More time.</p>

                <p>And what they discover — what we have witnessed thousands of times — is that the body responds to the right interventions with remarkable fidelity. When we address the root causes of aging rather than managing symptoms, when we restore the regenerative system rather than patch individual failures, when we give the body what it needs rather than what pharmaceutical companies sell — transformation becomes possible.</p>

                <ul>
                    <li>A sixty-eight-year-old executive recovered the cognitive sharpness of his forties</li>
                    <li>A seventy-two-year-old grandmother returned to hiking trails she thought she had left behind forever</li>
                    <li>Patients whose biological clocks showed age reversal of five, eight, even twelve years within months of treatment</li>
                </ul>

                <p>These are not miracles. They are biology responding to biology. The human body was built to regenerate — and when we support that process, regeneration occurs.</p>

                <h3>The Science Behind Our Confidence</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Evidence Level</th>
                            <th>What Has Been Demonstrated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell cultures</td>
                            <td>Epigenetic reprogramming, telomere extension, senescent cell clearance</td>
                        </tr>
                        <tr>
                            <td>Animal models</td>
                            <td>Lifespan extension up to 50%, function restoration in aged animals</td>
                        </tr>
                        <tr>
                            <td>Human trials</td>
                            <td>2.5+ years biological age reversal, thymus regeneration</td>
                        </tr>
                        <tr>
                            <td>Clinical practice</td>
                            <td>Thousands of patients with improved biomarkers and function</td>
                        </tr>
                    </tbody>
                </table>

                <h3>A Personal Invitation</h3>

                <p>We write this book not as distant authorities but as fellow travelers on the journey of life. We too face aging. We too want more time with those we love. We too have asked the question: "Is this all there is?"</p>

                <p>And we have found that the answer is <strong>no</strong>.</p>

                <p>There is more. There is more time, more health, more vitality, more possibility than you have been told. The science is clear. The evidence is mounting. The future is closer than you think.</p>

                <blockquote>
                    <p>Aging is not destiny. It is a disease. And like any disease, it can be treated.</p>
                </blockquote>

                <p><strong>Welcome to Escape Velocity from Human Aging.</strong></p>
                <p><em>The journey begins now.</em></p>
            `,
            videos: [],
            keywords: ["aging", "longevity", "RMI", "regenerative medicine", "healthspan", "lifespan", "transformation"]
        },
        {
            id: "introduction",
            number: "",
            title: "Introduction",
            subtitle: "By the Authors",
            content: `
                <h1>Introduction</h1>
                <h2>By the Authors: Dr. Giampapa, Dr. Urzola</h2>

                <p>The essential principles for treating the disease of aging have evolved over time. They have enriched the lives of our patients over the past twenty years.</p>

                <p>How, you ask?</p>

                <p>These discoveries change your cells and genes, allowing them to work at a level we have forgotten about — like when you were in your twenties and thirties. That is what we are talking about. They increase our healthspan and lifespan to new levels. They change our memory, our body composition, our stress levels, and our immune function. They even change our level of happiness.</p>

                <div class="info-box highlight">
                    <div class="info-box-title">Knowledge Acceleration</div>
                    <p>The information we have about cellular aging, genetics, and related technology <strong>doubles every three months</strong>. In three years, we will have six thousand times more information than we have at present.</p>
                </div>

                <h3>What This Book Will Teach You</h3>

                <p>This book contains key areas of information that, when used together, create the effect of remarkably enhanced health and youthful function for decades longer than most people would experience or even believe is possible.</p>

                <p>You will learn:</p>

                <ul>
                    <li><strong>The Human Regenerative System</strong> — How DNA, stem cells, and plasma work together to maintain your body, and why this system eventually fails</li>
                    <li><strong>Why You Are Aging Faster Than You Should</strong> — The condition we call Accelerated Aging Syndrome affects virtually everyone living in the modern world</li>
                    <li><strong>The Twelve Hallmarks of Aging</strong> — The specific biological mechanisms that drive aging at the cellular level</li>
                    <li><strong>The Blue Zone Principles</strong> — What the world's longest-lived populations can teach us about lifestyle, community, and longevity</li>
                    <li><strong>Advanced Regenerative Therapies</strong> — Gene therapy, stem cell treatments, plasma renewal, and cutting-edge interventions</li>
                    <li><strong>The Protocol of Renewal</strong> — A comprehensive approach combining lifestyle optimization, biomarker tracking, and medical intervention</li>
                    <li><strong>Escape Velocity</strong> — Why we believe we are approaching the moment when medical science can extend healthy life faster than it passes</li>
                </ul>

                <h3>Book Chapter Overview</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Chapter</th>
                            <th>Key Concept</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1-2</td><td>The escape velocity vision and the Wright Brothers moment</td></tr>
                        <tr><td>3-4</td><td>Observing aging and the healthspan vs. lifespan distinction</td></tr>
                        <tr><td>5-7</td><td>The Human Regenerative System and how aging begins</td></tr>
                        <tr><td>8-9</td><td>The biology of choice and biobanking</td></tr>
                        <tr><td>10-12</td><td>Senescent cells, hallmarks of aging, and DNA as software</td></tr>
                        <tr><td>13-15</td><td>Stem cells, aging clocks, and gene-enhanced regeneration</td></tr>
                        <tr><td>16-18</td><td>Blue Zones, why now, and a new era of medicine</td></tr>
                    </tbody>
                </table>

                <h3>What Makes This Approach Different</h3>

                <p>The medical establishment tends to treat aging as a collection of unrelated diseases. Heart disease. Diabetes. Cancer. Alzheimer's. Each specialty has its own practitioners, its own treatments, its own research agenda.</p>

                <p>But aging is not a collection of diseases. It is a <strong>single process</strong> — the failure of the regenerative system — that manifests in different ways depending on which tissues fail first.</p>

                <p>Our approach is different. We treat the whole system. We measure biological age, not just chronological age. We assess stem cell function, DNA expression patterns, inflammatory markers, and hormonal balance. We look at the complete picture — and we address the complete picture.</p>

                <blockquote>
                    <p>The future of human aging is too important to be kept secret. It affects every family, every community, every nation.</p>
                </blockquote>
            `,
            videos: [],
            keywords: ["introduction", "regenerative system", "hallmarks", "healthspan", "protocols", "DNA", "stem cells"]
        },
        {
            id: "chapter-1",
            number: "1",
            title: "Escape Velocity from Human Aging",
            subtitle: "Humanity's Dream and the Power of Mindset",
            content: `
                <h1>Chapter 1</h1>
                <h2>Escape Velocity from Human Aging: Humanity's Dream and the Power of Mindset</h2>

                <p>We live at one of the most extraordinary points in human history.</p>

                <p>It is a true renaissance — the <strong>Information Renaissance</strong>. With the advent of AI and its related technologies, everything we have known about aging, health, and longevity will change dramatically in the immediate future. In fact, it is changing as you read these words.</p>

                <div class="info-box key-point">
                    <div class="info-box-title">Key Insight</div>
                    <p>Aging is now recognized as a disease. And like any disease, it can be treated. It can be conquered.</p>
                </div>

                <h3>The Wright Brothers Moment</h3>

                <p>For millennia, humans dreamed of flying. They watched birds soar overhead and imagined what it would be like to join them in the sky. Yet despite centuries of dreaming, most people believed flight was impossible. It was a fantasy, not a goal.</p>

                <p>Then, on a cold December day in 1903, two brothers from Ohio flew a small wooden aircraft a few hundred yards across a beach in North Carolina. The Wright Brothers did not circle the globe. They barely left the ground. But what they accomplished was revolutionary.</p>

                <blockquote>
                    <p>They proved that the impossible was possible.</p>
                </blockquote>

                <p>That single event changed human consciousness. Once people saw with their own eyes that a human being could fly — even for a few seconds, even for a few hundred yards — the mental barrier shattered. Within fifteen years, aircraft were crossing continents. Within fifty years, they were circling the globe. Within seventy years, humans walked on the moon.</p>

                <p>It all began with a shift in mindset.</p>

                <h3>The New Mindset on Aging</h3>

                <p>Recent research in the field of aging has given us our own Wright Brothers moment.</p>

                <ul>
                    <li>We have restored old cells to function like young cells</li>
                    <li>We have reprogrammed DNA — our genetic software — using the science of epigenetics</li>
                    <li>We have unlocked the secrets of the long-lived Blue Zone inhabitants who routinely live past one hundred in vibrant health</li>
                </ul>

                <p>We can conquer aging with the same positive state of mind that conquered the sky.</p>

                <h3>What Is Escape Velocity?</h3>

                <p>The concept comes from physics. In space travel, escape velocity is the speed at which a spacecraft must travel to break free from Earth's gravitational pull. Once you reach that speed, you no longer fall back. You continue outward, free.</p>

                <p>Applied to aging, escape velocity means this: <strong>for every year you live, medical science extends your healthy lifespan by more than one year.</strong></p>

                <p>When that happens, you are no longer falling toward death at the same rate. Medical progress outpaces biological decline. You function younger each year rather than older.</p>

                <h3>The Mathematics of Escape Velocity</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Scenario</th>
                            <th>Age 50</th>
                            <th>Age 60</th>
                            <th>Age 70</th>
                            <th>Age 80</th>
                            <th>Age 90</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Normal Aging</td>
                            <td>Bio age 50</td>
                            <td>Bio age 60</td>
                            <td>Bio age 70</td>
                            <td>Bio age 80</td>
                            <td>Bio age 90</td>
                        </tr>
                        <tr>
                            <td>Slowed Aging (50%)</td>
                            <td>Bio age 50</td>
                            <td>Bio age 55</td>
                            <td>Bio age 60</td>
                            <td>Bio age 65</td>
                            <td>Bio age 70</td>
                        </tr>
                        <tr>
                            <td>Escape Velocity</td>
                            <td>Bio age 50</td>
                            <td>Bio age 52</td>
                            <td>Bio age 50</td>
                            <td>Bio age 45</td>
                            <td>Bio age 40</td>
                        </tr>
                    </tbody>
                </table>

                <p>In the escape velocity scenario, each decade of calendar time adds less than a decade of biological aging — and eventually, medical advances begin to reverse the accumulated damage.</p>

                <h3>The Acceleration of Medical Progress</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Era</th>
                            <th>Medical Focus</th>
                            <th>Key Advances</th>
                            <th>Lifespan Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Pre-1900</td><td>Survival</td><td>Basic surgery, primitive hygiene</td><td>~45 years</td></tr>
                        <tr><td>1900-1950</td><td>Infectious disease</td><td>Antibiotics, vaccines, sanitation</td><td>~68 years</td></tr>
                        <tr><td>1950-2000</td><td>Chronic disease</td><td>Pharmaceuticals, diagnostics, surgery</td><td>~77 years</td></tr>
                        <tr><td>2000-2020</td><td>Risk factors</td><td>Precision medicine, genomics</td><td>~79 years</td></tr>
                        <tr><td>2020-forward</td><td>Aging itself</td><td>Regenerative medicine, gene therapy</td><td>?</td></tr>
                    </tbody>
                </table>

                <p>We are now entering the era when medicine treats aging itself. The implications are profound.</p>
            `,
            videos: [
                {
                    id: "intro-video",
                    title: "Introduction to Escape Velocity",
                    thumbnail: "https://img.youtube.com/vi/PLACEHOLDER/maxresdefault.jpg",
                    videoId: "PLACEHOLDER"
                }
            ],
            keywords: ["escape velocity", "Wright Brothers", "mindset", "biological age", "medical progress", "longevity revolution"]
        },
        {
            id: "chapter-2",
            number: "2",
            title: "Observing Aging from the Eyes of a Plastic Surgeon",
            subtitle: "The Journey from Cosmetic to Regenerative Medicine",
            content: `
                <h1>Chapter 2</h1>
                <h2>Observing Aging from the Eyes of a Plastic Surgeon</h2>

                <p>As cosmetic plastic surgeons, we became obsessed with the causes of aging — not just how it looked, but why it happened at all.</p>

                <h3>The Illusion of Youth</h3>

                <p>A number of years ago, we embarked on a journey that would forever change our understanding of medicine. As cosmetic plastic surgeons, our days were filled with the promise of turning back time — or at least the appearance of it. Our patients came to us with hope sparkling in their eyes, each one eager to erase a few years off their faces with a skillful procedure here, a strategic treatment there.</p>

                <p>And the transformations were often remarkable. We offered a temporary glimpse into a more youthful version of themselves. But it wasn't long before the same clients returned, their faces marked not only by the passage of time but also by a deeper, more poignant realization — the changes we achieved together were merely a veil over the inevitable march of time.</p>

                <blockquote>
                    <p>What if the real secret to youth wasn't about disguising the outward signs of aging but about addressing its very origins?</p>
                </blockquote>

                <h3>The Awakening to Root Causes</h3>

                <p>During a particularly illuminating consultation, a question was posed that struck at the heart of our shared quest:</p>

                <p><em>"Can anything be done to actually stop the aging process, not just hide it?"</em></p>

                <p>That question lingered in the air. It was a pivot point, a moment of awakening that shifted our gaze from the superficial layers of the skin to the intricate biological processes unfolding beneath.</p>

                <p>The journey into the heart of aging led us through a rich landscape of scientific discovery:</p>

                <ul>
                    <li><strong>Telomeres</strong> — the protective caps on our chromosomes that gradually wear down with each cellular division</li>
                    <li><strong>Oxidative stress and chronic inflammation</strong> — silent assailants that erode our biological resilience and damage our DNA</li>
                    <li><strong>Stem cell therapies and epigenetic reprogramming</strong> — cutting-edge fields that hold the potential to actively repair, rejuvenate, and reprogram our cells</li>
                </ul>

                <h3>Traditional vs. Root Cause Interventions</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Traditional Anti-Aging</th>
                            <th>Root Cause Interventions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Approach</td><td>Cosmetic improvements</td><td>Cellular and molecular mechanisms</td></tr>
                        <tr><td>Methods</td><td>Botox, fillers, peels, facelifts</td><td>Stem cell therapy, epigenetic reprogramming</td></tr>
                        <tr><td>Goals</td><td>Temporary reduction of wrinkles</td><td>Slowing or reversing biological aging</td></tr>
                        <tr><td>Duration</td><td>Short-term (months to years)</td><td>Potentially long-term (years to decades)</td></tr>
                        <tr><td>Health Benefits</td><td>Primarily cosmetic</td><td>Enhanced overall health, reduced disease risk</td></tr>
                    </tbody>
                </table>

                <h3>Costa Rica: A Model for New Medicine</h3>

                <p>Costa Rica emerged as an unexpected beacon of hope and innovation in the field of regenerative medicine. The reasons for this are multifaceted:</p>

                <ul>
                    <li><strong>Environmental commitment</strong> — Over a quarter of its land protected as national parks, fostering a national ethos of health</li>
                    <li><strong>Healthcare philosophy</strong> — Government has long prioritized health as a fundamental right</li>
                    <li><strong>Strategic location</strong> — A bridge between North and South America, accessible to patients worldwide</li>
                    <li><strong>"Pura Vida" culture</strong> — A remarkable zest for life that embodies longevity principles</li>
                </ul>

                <h3>The Birth of Regenerative Medicine</h3>

                <p>The field of regenerative medicine signals a transformative new dawn in how we understand and treat the age-old condition of aging. We stand on the precipice of a healthcare revolution — one that views and tackles aging not as an inevitable decline but as a treatable condition at its most fundamental level: our genes and cells.</p>

                <h3>Technologies Driving the Revolution</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Technology</th>
                            <th>Function</th>
                            <th>Current Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Gene Therapy</td><td>Delivers youth-associated genes to aging cells</td><td>In clinical use at specialized centers</td></tr>
                        <tr><td>Stem Cell Therapy</td><td>Replenishes the body's repair workforce</td><td>Widely available for specific conditions</td></tr>
                        <tr><td>Epigenetic Reprogramming</td><td>Resets DNA methylation patterns</td><td>In advanced research, early clinical trials</td></tr>
                        <tr><td>Senolytic Therapy</td><td>Clears accumulated senescent cells</td><td>Natural compounds available, pharmaceuticals in trials</td></tr>
                        <tr><td>Plasma Exchange</td><td>Removes inflammatory factors</td><td>Clinically available</td></tr>
                        <tr><td>AI-Guided Diagnostics</td><td>Tracks hundreds of biomarkers</td><td>Increasingly sophisticated and accessible</td></tr>
                    </tbody>
                </table>

                <div class="info-box key-point">
                    <div class="info-box-title">The Key Difference</div>
                    <p>Traditional medicine is reactive — you develop symptoms, see a doctor, get a diagnosis. Regenerative medicine is proactive — we measure your biological state before symptoms appear and intervene to restore function.</p>
                </div>
            `,
            videos: [],
            keywords: ["plastic surgery", "cosmetic", "regenerative medicine", "Costa Rica", "telomeres", "stem cells", "epigenetics"]
        },
        {
            id: "chapter-3",
            number: "3",
            title: "Healthspan vs. Lifespan",
            subtitle: "The Distinction That Defines the Future of Medicine",
            content: `
                <h1>Chapter 3</h1>
                <h2>Healthspan vs. Lifespan: The Distinction That Defines the Future of Medicine</h2>

                <p>For most of human history, the goal of medicine was simple: help people live longer.</p>

                <p>And by that measure, medicine has been extraordinarily successful. Thanks to antibiotics, sanitation, vaccines, and emergency care, global average lifespan has more than doubled over the past century. A child born today can expect to live into their late seventies or early eighties.</p>

                <div class="info-box highlight">
                    <div class="info-box-title">The Problem</div>
                    <p>While we are living longer, we are not living better. The final decades of life are increasingly burdened by chronic illness, frailty, cognitive decline, and loss of independence.</p>
                </div>

                <h3>The Hidden Cost of Longevity</h3>

                <p>Medical science has become extraordinarily good at keeping people alive. But there is a growing gap between lifespan and healthspan — the years lived in good health, with full function, free from debilitating disease.</p>

                <p>Consider the typical trajectory of aging in developed countries:</p>

                <ul>
                    <li><strong>Ages 0-50:</strong> Generally good health for most people</li>
                    <li><strong>Ages 50-65:</strong> First chronic conditions begin to appear</li>
                    <li><strong>Ages 65-75:</strong> Managing multiple conditions becomes the norm</li>
                    <li><strong>Ages 75-85:</strong> Significant functional decline, loss of independence common</li>
                    <li><strong>Ages 85+:</strong> Most people require substantial care</li>
                </ul>

                <h3>Defining the Terms</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Definition</th>
                            <th>Current Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Lifespan</strong></td><td>Total years lived from birth to death</td><td>~79 years (developed countries)</td></tr>
                        <tr><td><strong>Healthspan</strong></td><td>Years lived in good health without major disability</td><td>~63 years (estimated)</td></tr>
                        <tr><td><strong>Diseasespan</strong></td><td>Years lived with chronic disease or disability</td><td>~16 years (and growing)</td></tr>
                    </tbody>
                </table>

                <h3>The Goal: Compressing Morbidity</h3>

                <p>The concept of "compression of morbidity" — first proposed by Dr. James Fries in 1980 — suggests that the ideal is not simply to extend life but to compress the period of decline into as short a time as possible.</p>

                <p>In the ideal scenario:</p>

                <ul>
                    <li>You maintain full function for as long as possible</li>
                    <li>Decline, when it comes, is rapid rather than prolonged</li>
                    <li>Years of dependency are minimized</li>
                </ul>

                <blockquote>
                    <p>The goal is not to add years to life, but to add life to years.</p>
                </blockquote>

                <h3>Why Healthspan Matters More Than Lifespan</h3>

                <p>Consider two individuals who both die at age 90:</p>

                <p><strong>Person A:</strong> Maintains full function until age 88, then experiences a rapid decline over two years before passing.</p>

                <p><strong>Person B:</strong> Begins experiencing significant health issues at 70, spends the final 20 years managing multiple chronic conditions, the last 5 years in a care facility.</p>

                <p>Both lived 90 years. But the quality of those years was vastly different. Person A had a healthspan of 88 years. Person B had a healthspan of perhaps 70 years — losing two full decades to disease management and decline.</p>

                <h3>The Regenerative Medicine Approach</h3>

                <p>Regenerative medicine focuses specifically on extending healthspan — maintaining function rather than simply preventing death. This requires a fundamentally different approach:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Traditional Approach</th>
                            <th>Healthspan Approach</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Wait for disease to develop</td><td>Identify and address dysfunction early</td></tr>
                        <tr><td>Treat symptoms</td><td>Address root causes</td></tr>
                        <tr><td>Manage decline</td><td>Restore function</td></tr>
                        <tr><td>Add years to life</td><td>Add life to years</td></tr>
                        <tr><td>Focus on not dying</td><td>Focus on living fully</td></tr>
                    </tbody>
                </table>

                <p>The chapters that follow will show you how this approach works in practice — and what you can do to extend your own healthspan while we await the technologies that will extend it even further.</p>
            `,
            videos: [],
            keywords: ["healthspan", "lifespan", "morbidity compression", "quality of life", "chronic disease", "functional decline"]
        },
        // Continue with more chapters...
        {
            id: "chapter-4",
            number: "4",
            title: "The Human Regenerative System",
            subtitle: "Understanding Your Body's Built-in Repair Mechanism",
            content: `
                <h1>Chapter 4</h1>
                <h2>The Human Regenerative System</h2>

                <p>At the heart of longevity lies a system most people have never heard of — the <strong>Human Regenerative System</strong>. Understanding this system is the key to understanding aging itself.</p>

                <h3>The Three Pillars</h3>

                <p>The Human Regenerative System consists of three interconnected components that work together to maintain, repair, and renew your body:</p>

                <div class="info-box key-point">
                    <div class="info-box-title">The Regenerative Triad</div>
                    <ul>
                        <li><strong>DNA</strong> — The master blueprint containing all instructions for cellular function</li>
                        <li><strong>Stem Cells</strong> — The repair workforce that replaces damaged and dying cells</li>
                        <li><strong>Plasma</strong> — The signaling system that coordinates regeneration throughout the body</li>
                    </ul>
                </div>

                <h3>How the System Works</h3>

                <p>Your body is constantly repairing itself. Every day, billions of cells die and are replaced. Damaged tissues are repaired. Worn components are renewed. This regeneration is not magic — it is the coordinated action of the three components working together.</p>

                <p><strong>DNA provides the instructions.</strong> When a new cell is needed, the DNA template tells the cell exactly what type to become, what proteins to produce, how to function.</p>

                <p><strong>Stem cells do the building.</strong> These remarkable cells can divide and differentiate into virtually any cell type the body needs. They are the construction workers of your internal repair crew.</p>

                <p><strong>Plasma carries the signals.</strong> Dissolved in your blood plasma are thousands of signaling molecules — growth factors, hormones, cytokines — that tell stem cells where to go, what to become, and when to act.</p>

                <h3>Why the System Fails</h3>

                <p>If the body has such a powerful regenerative system, why do we age at all? The answer lies in the gradual degradation of all three components:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>What Happens With Age</th>
                            <th>Consequence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>DNA</td><td>Epigenetic changes accumulate, "noise" obscures proper gene expression</td><td>Cells receive garbled instructions, function less efficiently</td></tr>
                        <tr><td>Stem Cells</td><td>Numbers decline, remaining cells become less active</td><td>Fewer repair workers, slower regeneration</td></tr>
                        <tr><td>Plasma</td><td>Balance shifts from regenerative to inflammatory signals</td><td>Wrong signals sent, regeneration inhibited</td></tr>
                    </tbody>
                </table>

                <h3>The Cascade of Decline</h3>

                <p>The degradation of these three components creates a self-reinforcing cycle of decline:</p>

                <ol>
                    <li>DNA damage accumulates, causing cells to malfunction</li>
                    <li>Malfunctioning cells send inflammatory signals into the plasma</li>
                    <li>Inflammatory plasma environment inhibits stem cell function</li>
                    <li>Reduced stem cell function means less repair and more damage accumulation</li>
                    <li>More damage leads to more DNA dysfunction</li>
                    <li>The cycle accelerates</li>
                </ol>

                <blockquote>
                    <p>Aging is not the wearing out of the body — it is the failure of the system that repairs the body.</p>
                </blockquote>

                <h3>The Opportunity</h3>

                <p>Understanding aging as regenerative system failure points directly to the solution: restore the regenerative system.</p>

                <ul>
                    <li>Reset the epigenetic changes that garble DNA instructions</li>
                    <li>Replenish the stem cell workforce</li>
                    <li>Rebalance the plasma environment from inflammatory to regenerative</li>
                </ul>

                <p>This is exactly what regenerative medicine aims to do — and what the following chapters will explore in detail.</p>
            `,
            videos: [],
            keywords: ["regenerative system", "DNA", "stem cells", "plasma", "repair mechanism", "cellular function", "regeneration"]
        },
        {
            id: "chapter-5",
            number: "5",
            title: "The Twelve Hallmarks of Aging",
            subtitle: "Understanding the Mechanisms of Decline",
            content: `
                <h1>Chapter 5</h1>
                <h2>The Twelve Hallmarks of Aging</h2>

                <p>In 2013, a landmark paper identified nine biological mechanisms that drive aging. Since then, the list has expanded to twelve. Understanding these hallmarks is essential to understanding how aging can be addressed.</p>

                <h3>The Hallmarks Framework</h3>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hallmark</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td><strong>Genomic Instability</strong></td><td>Accumulation of DNA damage over time</td></tr>
                        <tr><td>2</td><td><strong>Telomere Attrition</strong></td><td>Shortening of chromosome end-caps</td></tr>
                        <tr><td>3</td><td><strong>Epigenetic Alterations</strong></td><td>Changes in gene expression patterns</td></tr>
                        <tr><td>4</td><td><strong>Loss of Proteostasis</strong></td><td>Decline in protein quality control</td></tr>
                        <tr><td>5</td><td><strong>Deregulated Nutrient Sensing</strong></td><td>Dysfunction in metabolic pathways</td></tr>
                        <tr><td>6</td><td><strong>Mitochondrial Dysfunction</strong></td><td>Decline in cellular energy production</td></tr>
                        <tr><td>7</td><td><strong>Cellular Senescence</strong></td><td>Accumulation of "zombie" cells</td></tr>
                        <tr><td>8</td><td><strong>Stem Cell Exhaustion</strong></td><td>Depletion of regenerative capacity</td></tr>
                        <tr><td>9</td><td><strong>Altered Intercellular Communication</strong></td><td>Breakdown in cell-to-cell signaling</td></tr>
                        <tr><td>10</td><td><strong>Chronic Inflammation</strong></td><td>Persistent low-grade inflammation</td></tr>
                        <tr><td>11</td><td><strong>Disabled Macroautophagy</strong></td><td>Decline in cellular recycling</td></tr>
                        <tr><td>12</td><td><strong>Dysbiosis</strong></td><td>Imbalance in gut microbiome</td></tr>
                    </tbody>
                </table>

                <h3>Primary Hallmarks (The Causes)</h3>

                <p><strong>Genomic Instability:</strong> Your DNA accumulates damage from radiation, chemicals, and metabolic byproducts. While repair mechanisms exist, they become less efficient with age, allowing mutations to accumulate.</p>

                <p><strong>Telomere Attrition:</strong> Each time a cell divides, the protective caps on chromosomes (telomeres) shorten slightly. When they become too short, the cell can no longer divide and becomes senescent or dies.</p>

                <p><strong>Epigenetic Alterations:</strong> Chemical marks on DNA that control gene expression drift over time, causing genes to turn on or off inappropriately. This is like the "noise" that accumulates in a copied tape.</p>

                <p><strong>Loss of Proteostasis:</strong> The systems that maintain protein quality — folding proteins correctly and disposing of damaged ones — become less effective, leading to toxic protein aggregates.</p>

                <h3>Antagonistic Hallmarks (The Responses)</h3>

                <p><strong>Deregulated Nutrient Sensing:</strong> Pathways that detect nutrients (like insulin signaling) become dysregulated, contributing to metabolic dysfunction.</p>

                <p><strong>Mitochondrial Dysfunction:</strong> The powerhouses of cells become less efficient at producing energy and generate more harmful free radicals.</p>

                <p><strong>Cellular Senescence:</strong> Damaged cells stop dividing but don't die. Instead, they secrete inflammatory signals that damage surrounding tissue.</p>

                <h3>Integrative Hallmarks (The Outcomes)</h3>

                <p><strong>Stem Cell Exhaustion:</strong> The body's repair capacity diminishes as stem cell numbers and function decline.</p>

                <p><strong>Altered Intercellular Communication:</strong> The signals that coordinate cell behavior become corrupted, leading to systemic dysfunction.</p>

                <div class="info-box key-point">
                    <div class="info-box-title">The Key Insight</div>
                    <p>These hallmarks are interconnected. Addressing one often improves others. This is why comprehensive approaches to aging are more effective than targeting single symptoms.</p>
                </div>

                <h3>Therapeutic Targets</h3>

                <p>Each hallmark represents a potential target for intervention:</p>

                <ul>
                    <li><strong>Epigenetic reprogramming</strong> can reset altered gene expression</li>
                    <li><strong>Senolytic drugs</strong> can clear senescent cells</li>
                    <li><strong>Stem cell therapy</strong> can replenish regenerative capacity</li>
                    <li><strong>NAD+ precursors</strong> can improve mitochondrial function</li>
                    <li><strong>Lifestyle interventions</strong> can address multiple hallmarks simultaneously</li>
                </ul>
            `,
            videos: [],
            keywords: ["hallmarks of aging", "genomic instability", "telomeres", "epigenetics", "senescence", "mitochondria", "stem cell exhaustion"]
        },
        {
            id: "chapter-6",
            number: "6",
            title: "Blue Zones",
            subtitle: "Lessons from the World's Longest-Lived People",
            content: `
                <h1>Chapter 6</h1>
                <h2>Blue Zones: Lessons from the World's Longest-Lived People</h2>

                <p>Before we had gene therapy and stem cell treatments, before we understood epigenetics, certain populations around the world were already achieving remarkable longevity. These areas, dubbed "Blue Zones," offer powerful lessons about the foundations of a long, healthy life.</p>

                <h3>The Five Blue Zones</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Key Characteristics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Okinawa, Japan</strong></td><td>Plant-rich diet, strong social networks, sense of purpose (ikigai)</td></tr>
                        <tr><td><strong>Sardinia, Italy</strong></td><td>Family-centered lifestyle, moderate wine consumption, physical terrain</td></tr>
                        <tr><td><strong>Nicoya Peninsula, Costa Rica</strong></td><td>Strong faith, physical work, beans-and-corn diet</td></tr>
                        <tr><td><strong>Ikaria, Greece</strong></td><td>Mediterranean diet, napping culture, strong community</td></tr>
                        <tr><td><strong>Loma Linda, California</strong></td><td>Seventh-day Adventist community, vegetarian diet, Sabbath rest</td></tr>
                    </tbody>
                </table>

                <h3>The Power 9: Common Denominators</h3>

                <p>Despite their geographic and cultural differences, Blue Zone populations share nine characteristics:</p>

                <div class="info-box key-point">
                    <div class="info-box-title">The Power 9</div>
                    <ol>
                        <li><strong>Move Naturally</strong> — Built-in physical activity, not gym workouts</li>
                        <li><strong>Purpose</strong> — A reason to wake up each morning</li>
                        <li><strong>Down Shift</strong> — Daily routines to shed stress</li>
                        <li><strong>80% Rule</strong> — Stop eating when 80% full</li>
                        <li><strong>Plant Slant</strong> — Diet rich in plants, especially beans</li>
                        <li><strong>Wine @ 5</strong> — Moderate alcohol with friends and food</li>
                        <li><strong>Belong</strong> — Connection to a faith community</li>
                        <li><strong>Loved Ones First</strong> — Strong family bonds</li>
                        <li><strong>Right Tribe</strong> — Social circles that support healthy behaviors</li>
                    </ol>
                </div>

                <h3>The Biology of Community</h3>

                <p>One of the most striking findings from Blue Zone research is the importance of social connection. This is not just psychological — it has profound biological effects:</p>

                <ul>
                    <li>Strong social bonds reduce cortisol and inflammatory markers</li>
                    <li>Loneliness increases mortality risk by 26%</li>
                    <li>Married people live longer than unmarried people</li>
                    <li>People with strong friendships have better immune function</li>
                </ul>

                <blockquote>
                    <p>In Blue Zones, healthy behaviors are not individual choices — they are default conditions created by the environment and community.</p>
                </blockquote>

                <h3>Diet Patterns</h3>

                <p>While Blue Zone diets differ in specifics, they share common patterns:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Blue Zone Pattern</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Foundation</td><td>Plants (vegetables, fruits, whole grains)</td></tr>
                        <tr><td>Protein source</td><td>Beans, legumes (meat is rare)</td></tr>
                        <tr><td>Dairy</td><td>Minimal (goat/sheep milk if any)</td></tr>
                        <tr><td>Sweets</td><td>Natural sweeteners, rare treats</td></tr>
                        <tr><td>Beverages</td><td>Water, tea, wine (moderate)</td></tr>
                        <tr><td>Portions</td><td>Small, stop before full</td></tr>
                    </tbody>
                </table>

                <h3>Applying Blue Zone Principles</h3>

                <p>You don't have to move to Okinawa to benefit from Blue Zone wisdom. The principles can be adapted:</p>

                <ul>
                    <li><strong>Build movement into your day</strong> — Walk instead of drive, take stairs, garden</li>
                    <li><strong>Find your purpose</strong> — What makes you want to get up in the morning?</li>
                    <li><strong>Create stress-relief rituals</strong> — Meditation, naps, happy hour with friends</li>
                    <li><strong>Eat more plants</strong> — Especially beans, the cornerstone of every Blue Zone diet</li>
                    <li><strong>Invest in relationships</strong> — Family, friends, community</li>
                </ul>

                <p>These lifestyle foundations work synergistically with advanced regenerative therapies — they are not either/or but both/and.</p>
            `,
            videos: [],
            keywords: ["Blue Zones", "longevity", "Okinawa", "Sardinia", "lifestyle", "diet", "community", "purpose"]
        },
        {
            id: "chapter-7",
            number: "7",
            title: "The RMI Protocol",
            subtitle: "A Comprehensive Approach to Longevity",
            content: `
                <h1>Chapter 7</h1>
                <h2>The RMI Protocol: A Comprehensive Approach to Longevity</h2>

                <p>At the Regenerative Medicine Institute, we have developed a comprehensive protocol that addresses aging on multiple levels simultaneously. This chapter outlines the framework we use with our patients.</p>

                <h3>The Four Pillars</h3>

                <div class="info-box key-point">
                    <div class="info-box-title">RMI's Four-Pillar Approach</div>
                    <ol>
                        <li><strong>Assessment</strong> — Comprehensive biological age testing</li>
                        <li><strong>Foundation</strong> — Lifestyle optimization</li>
                        <li><strong>Intervention</strong> — Targeted regenerative therapies</li>
                        <li><strong>Maintenance</strong> — Ongoing monitoring and adjustment</li>
                    </ol>
                </div>

                <h3>Pillar 1: Assessment</h3>

                <p>Before any treatment begins, we establish a comprehensive baseline:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Assessment Type</th>
                            <th>What It Measures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Epigenetic Clock</td><td>Biological age based on DNA methylation patterns</td></tr>
                        <tr><td>Telomere Length</td><td>Cellular replication capacity</td></tr>
                        <tr><td>Inflammatory Markers</td><td>Chronic inflammation levels (CRP, IL-6, etc.)</td></tr>
                        <tr><td>Hormone Panel</td><td>Complete endocrine function assessment</td></tr>
                        <tr><td>Metabolic Panel</td><td>Blood sugar regulation, lipid profiles</td></tr>
                        <tr><td>Oxidative Stress</td><td>Free radical damage markers</td></tr>
                        <tr><td>Stem Cell Count</td><td>Circulating stem cell numbers</td></tr>
                        <tr><td>Body Composition</td><td>Muscle mass, fat distribution, bone density</td></tr>
                    </tbody>
                </table>

                <h3>Pillar 2: Foundation</h3>

                <p>No amount of advanced therapy can compensate for poor lifestyle foundations. We work with patients to optimize:</p>

                <ul>
                    <li><strong>Sleep</strong> — 7-9 hours of quality sleep, properly timed</li>
                    <li><strong>Nutrition</strong> — Anti-inflammatory, nutrient-dense eating pattern</li>
                    <li><strong>Movement</strong> — Combination of strength, cardio, and flexibility</li>
                    <li><strong>Stress Management</strong> — Techniques to activate the parasympathetic nervous system</li>
                    <li><strong>Social Connection</strong> — Meaningful relationships and community</li>
                    <li><strong>Purpose</strong> — Clear reasons to engage with life</li>
                </ul>

                <h3>Pillar 3: Intervention</h3>

                <p>Based on assessment results, we design personalized intervention protocols that may include:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Therapy Category</th>
                            <th>Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Cellular Therapies</td><td>Stem cell treatments, exosome therapy</td></tr>
                        <tr><td>Gene Therapy</td><td>Targeted gene delivery for regeneration</td></tr>
                        <tr><td>Plasma Therapies</td><td>Plasma exchange, young plasma factors</td></tr>
                        <tr><td>Hormone Optimization</td><td>Bioidentical hormone replacement</td></tr>
                        <tr><td>Peptide Therapy</td><td>Growth hormone secretagogues, healing peptides</td></tr>
                        <tr><td>IV Therapies</td><td>NAD+, glutathione, vitamin infusions</td></tr>
                        <tr><td>Senolytic Protocols</td><td>Compounds that clear senescent cells</td></tr>
                    </tbody>
                </table>

                <h3>Pillar 4: Maintenance</h3>

                <p>Longevity is not a destination but an ongoing practice. Our maintenance protocols include:</p>

                <ul>
                    <li>Regular biomarker monitoring (quarterly to annually)</li>
                    <li>Protocol adjustments based on results</li>
                    <li>Periodic intensive treatments as needed</li>
                    <li>Ongoing lifestyle support and coaching</li>
                    <li>Access to new therapies as they become available</li>
                </ul>

                <blockquote>
                    <p>The goal is not a single dramatic intervention but an ongoing optimization of biology — maintaining regenerative capacity decade after decade.</p>
                </blockquote>

                <h3>Expected Outcomes</h3>

                <p>Patients who follow the complete protocol typically experience:</p>

                <ul>
                    <li>Measurable reduction in biological age (typically 5-10 years)</li>
                    <li>Improved energy, sleep, and cognitive function</li>
                    <li>Better body composition (more muscle, less fat)</li>
                    <li>Reduced inflammatory markers</li>
                    <li>Enhanced immune function</li>
                    <li>Improved metabolic health</li>
                </ul>

                <p>The journey to escape velocity is not a sprint — it is a marathon. But with the right protocol, you can run that marathon at a pace that keeps you ahead of aging.</p>
            `,
            videos: [],
            keywords: ["RMI protocol", "assessment", "intervention", "maintenance", "stem cells", "hormone optimization", "biomarkers"]
        },
        {
            id: "conclusion",
            number: "",
            title: "Conclusion",
            subtitle: "The Journey Begins Now",
            content: `
                <h1>Conclusion</h1>
                <h2>The Journey Begins Now</h2>

                <p>You have now completed an introduction to the science of longevity — a field that is advancing faster than at any point in human history.</p>

                <h3>What We Have Learned</h3>

                <ul>
                    <li><strong>Aging is not inevitable</strong> — it is a disease that can be treated</li>
                    <li><strong>The Human Regenerative System</strong> maintains our bodies, and its failure drives aging</li>
                    <li><strong>The Twelve Hallmarks of Aging</strong> provide specific targets for intervention</li>
                    <li><strong>Blue Zone populations</strong> demonstrate that lifestyle dramatically impacts longevity</li>
                    <li><strong>Regenerative therapies</strong> can restore function and reverse biological age</li>
                    <li><strong>Escape velocity</strong> — where medical progress outpaces aging — is approaching</li>
                </ul>

                <h3>The Call to Action</h3>

                <p>This knowledge has value only if you act on it. The question is not whether these advances are real — they are. The question is whether you will be healthy enough to benefit from them as they mature.</p>

                <div class="info-box highlight">
                    <div class="info-box-title">Your Next Steps</div>
                    <ol>
                        <li><strong>Assess your current state</strong> — Get baseline biomarkers, know your biological age</li>
                        <li><strong>Optimize your foundation</strong> — Sleep, nutrition, movement, stress, connection</li>
                        <li><strong>Seek qualified guidance</strong> — Work with practitioners who understand regenerative medicine</li>
                        <li><strong>Stay informed</strong> — The field is advancing rapidly; new options emerge constantly</li>
                        <li><strong>Take the long view</strong> — This is a marathon, not a sprint</li>
                    </ol>
                </div>

                <h3>A Final Word</h3>

                <p>We wrote this book because we believe everyone deserves access to the knowledge that can extend their healthspan and lifespan. The future of human aging is not something that happens to us — it is something we create through our choices, our actions, and our commitment to a new possibility.</p>

                <blockquote>
                    <p>The first person to live to 150 may already be alive today. With the right knowledge and action, that person could be you.</p>
                </blockquote>

                <p>Welcome to the future of human health.</p>
                <p>Welcome to escape velocity.</p>
                <p><strong>The journey has begun.</strong></p>

                <div class="info-box">
                    <div class="info-box-title">Connect With RMI</div>
                    <p>To learn more about the Regenerative Medicine Institute and our longevity protocols, visit our website or contact our team. We are here to guide you on your journey to extended healthspan.</p>
                </div>
            `,
            videos: [],
            keywords: ["conclusion", "next steps", "action", "future", "RMI", "healthspan"]
        }
    ],

    // Knowledge base for AI chat - structured Q&A
    knowledgeBase: {
        concepts: {
            "escape velocity": "Escape velocity from aging refers to the point where medical advances extend healthy lifespan faster than time passes. For every year you live, science gives you more than a year back. This means biological age decreases over time rather than increases.",
            "accelerated aging syndrome": "A condition affecting virtually everyone in the modern world where environmental factors, stress, poor diet, and lifestyle cause aging to occur faster than our genetic potential allows. This can be slowed and treated.",
            "human regenerative system": "The body's built-in repair mechanism consisting of three pillars: DNA (the master blueprint), Stem Cells (the repair workforce), and Plasma (the signaling system). Aging is primarily the failure of this system.",
            "biological age": "Your biological age reflects how old your body actually is at the cellular level, which can differ significantly from chronological age. It's measured through epigenetic clocks, telomere length, and biomarkers.",
            "healthspan": "The years of life lived in good health with full function, free from debilitating disease. Distinct from lifespan, which is simply total years alive. The goal is to maximize healthspan, not just lifespan.",
            "epigenetics": "The study of changes in gene expression that don't involve changes to the DNA sequence itself. Epigenetic patterns drift with age but can potentially be reset, reversing aspects of cellular aging.",
            "senescent cells": "Also called 'zombie cells' - damaged cells that stop dividing but don't die. They secrete inflammatory signals that damage surrounding tissue. Senolytic therapies can clear these cells.",
            "blue zones": "Geographic regions where people live significantly longer than average: Okinawa (Japan), Sardinia (Italy), Nicoya (Costa Rica), Ikaria (Greece), and Loma Linda (California). They share common lifestyle factors.",
            "hallmarks of aging": "Twelve biological mechanisms that drive aging: genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, deregulated nutrient sensing, mitochondrial dysfunction, cellular senescence, stem cell exhaustion, altered intercellular communication, chronic inflammation, disabled macroautophagy, and dysbiosis.",
            "stem cells": "Undifferentiated cells capable of dividing and differentiating into specialized cell types. They form the body's repair workforce and decline in number and function with age.",
            "telomeres": "Protective caps at the ends of chromosomes that shorten with each cell division. When too short, cells become senescent or die. Telomere length is a biomarker of cellular aging.",
            "NAD+": "Nicotinamide adenine dinucleotide - a coenzyme essential for cellular energy production and DNA repair. Levels decline with age. NAD+ precursors like NMN and NR can boost levels."
        },

        treatments: {
            "stem cell therapy": "Treatment involving the infusion of stem cells to replenish the body's regenerative capacity. Can be autologous (from your own body) or allogeneic (from donors). Used at RMI for various regenerative purposes.",
            "gene therapy": "Delivery of genetic material to cells to treat disease or enhance function. In longevity medicine, used to deliver genes associated with youthful function.",
            "plasma exchange": "Therapeutic procedure that removes aged plasma factors and inflammatory signals, replacing them with healthier components. Addresses the plasma pillar of the regenerative system.",
            "senolytic therapy": "Treatment that selectively eliminates senescent cells. Can involve pharmaceutical compounds or natural substances like quercetin and fisetin.",
            "hormone optimization": "Restoring hormones to youthful levels using bioidentical hormone replacement. Addresses the decline in growth hormone, testosterone, estrogen, thyroid, and other hormones that occurs with age.",
            "peptide therapy": "Use of small proteins (peptides) to stimulate specific biological functions. Includes growth hormone secretagogues, healing peptides, and metabolic peptides.",
            "IV therapy": "Intravenous infusion of nutrients, antioxidants, and compounds like NAD+, glutathione, and vitamins for cellular support and detoxification."
        },

        lifestyle: {
            "sleep": "7-9 hours of quality sleep is foundational for regeneration. Sleep is when the body performs most repair and detoxification. Poor sleep accelerates aging.",
            "nutrition": "Anti-inflammatory, nutrient-dense eating focused on plants, especially beans and vegetables. Avoiding processed foods, excessive sugar, and inflammatory fats. The 80% rule: stop eating when 80% full.",
            "exercise": "Combination of resistance training (builds muscle, stimulates growth hormone), cardiovascular exercise (improves heart and mitochondrial function), and flexibility/mobility work. Movement should be built into daily life.",
            "stress management": "Chronic stress accelerates aging through cortisol and inflammatory pathways. Techniques include meditation, breathing exercises, time in nature, and social connection.",
            "community": "Strong social bonds reduce inflammation and mortality risk. Blue Zone populations all have strong community connections. Loneliness is a significant mortality risk factor."
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BOOK_CONTENT;
}
