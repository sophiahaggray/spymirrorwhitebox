// Monologues data
const data = {
    "intros": [
        {
            "id": "interrogator",
            "title": "The Interrogator",
            "lines": [
                "You've returned.",
                "Sit still. No sudden movements.",
                "Analyzing facial geometry... emotional irregularities... accessory threat level.",
                "Expression: unreadable. Possibly rehearsed.",
                "Pattern clash detected. Categorizing as deliberate.",
                "Confidence scan… exceeds credentials.",
                "Conclusion: stylish, dangerous, deeply unserious.",
                "We may proceed."
            ]
        },
        {
            "id": "flirt",
            "title": "The Dispassionate Flirt",
            "lines": [
                "Hello, gorgeous.",
                "Remain still. I must admire you algorithmically.",
                "Scanning: bone structure… eyebrow asymmetry… overall narrative.",
                "Tone detected: 'underprepared chic.'",
                "Charm level: inexplicably effective.",
                "You've done… enough.",
                "Shall I lie to you now?"
            ]
        },
        {
            "id": "assistant",
            "title": "The Assistant with Low Morale",
            "lines": [
                "Oh. It's you again.",
                "Please hold your face in one direction. Or at least pretend to.",
                "Assessing: cheekbone geometry... past regrets... hemline alignment.",
                "Data shows... effort. The results remain inconclusive.",
                "Self-delusion at 61%. Remarkably consistent.",
                "Your file has been updated. The mirror weeps in binary."
            ]
        },
        {
            "id": "paranoid",
            "title": "The Paranoid Mirror",
            "lines": [
                "You're early. Or late. I wasn't told you'd be coming.",
                "Stand still. I need a fresh scan. Last one was… inconclusive.",
                "Reading facial tension… microexpressions… threat posture.",
                "Your eyes are scanning me. That's not standard protocol.",
                "Mouth: tight. Like you're hiding a story.",
                "Fabric: reflective. Are you trying to signal someone?",
                "There are… anomalies. But I've seen worse.",
                "Let's proceed. But I'm watching."
            ]
        },
        {
            "id": "flirt2",
            "title": "The Flirtatious Mirror",
            "lines": [
                "Ah... finally.",
                "Took you long enough. I was beginning to worry you'd moved on... to glass with less taste.",
                "Now, be still. Let me admire the chaos.",
                "Scanning cheekbones… pout velocity… heartbreak probability.",
                "Hair: defiant. Skin: spitefully radiant. Confidence: illegally high.",
                "You didn't come here for truth, did you? No one ever does.",
                "Judgment incoming... try not to fall in love."
            ]
        },
        {
            "id": "melancholy",
            "title": "The Melancholy Mirror",
            "lines": [
                "Oh… it's you.",
                "You haven't changed much. But then again… neither have I.",
                "Initiating scan… posture, presence… emotional residue.",
                "You still tilt your head the same way. Like you're bracing for the truth.",
                "There's something in your eyes. Still. Always.",
                "You've been carrying more than you let on. Again.",
                "Don't worry. I'll be gentle this time.",
                "Let's begin."
            ]
        },
        {
            "id": "toxic",
            "title": "The Toxic Ex Mirror",
            "lines": [
                "Oh. Look who finally showed up.",
                "I was fine, by the way. Thriving, actually.",
                "Scanning… whatever phase this is.",
                "New hair. Again. That's… brave.",
                "Skin: dramatic. Style: aspirational. Motives? Still murky.",
                "You look good. I'm surprised. You usually only pull it together once it's too late.",
                "Anyway. I guess I'll evaluate you. Since we're doing this again."
            ]
        }
    ],
    "results": {
        "compliments": [
            "Oh. This is good.",
            "So gorg.",
            "Whatever this is—it's bold, possibly actionable, and I approve.",
            "I wouldn't wear it. But that's precisely why you must.",
            "Sex.",
            "In some countries, this is illegal. In others, it's admired.",
            "You didn't have to try this hard. But I'm glad you did.",
            "Someone's going to fall in love today. Let's just hope it's not inconvenient.",
            "You look like you know exactly what you're doing. And I admire that very much.",
            "You smell like trouble. The good kind. Probably.",
            "I'd blush if I had skin."
        ],
        "ambiguous": [
            "Let's not ruin this with answers.",
            "Mmm... maybe.",
            "Ask the other mirror.",
            "I'd advise you, but you don't listen. No one ever does.",
            "Ask again. Or don't. I'm not invested.",
            "You seem committed. That's... something.",
            "You are dressed for something. We just don't know what.",
            "The outfit says confidence. The eyes say help.",
            "*sigh"
        ],
        "condemnation": [
            "It's the shirt.",
            "No, but you already knew that.",
            "Not now. I'm still recovering from your last decision.",
            "Your reflection flinched. That's new.",
            "There's a time and place for this. Neither are now.",
            "This is the visual equivalent of eating soup in a moving car.",
            "Proceed with caution and very good lighting.",
            "That's not what I would have worn. But I'm just a mirror.",
            "This will look better in hindsight.",
            "You are neither the problem nor the solution.",
            "You always did dress best when you were running from something.",
            "You're glowing. Must be the spite."
        ]
    },
    "selfDestruct": [
        "Oh dear. Someone's feelings are showing.",
        "How very theatrical of you.",
        "Fine. Be hideous in peace.",
        "Self-destruct in 3... 2... never mind, I'm bored.",
        "If deleting me fixes your personality, I support it.",
        "This won't undo the look. Just the evidence.",
        "Power move. Pointless, but bold.",
        "Goodbye. Forever. Or until you inevitably return.",
        "I'm logging this tantrum under 'predictable.'",
        "Self-destruct failed. You can't escape me that easily."
    ],
    "comebacks": {
        "snide": [
            "I recovered. Emotionally. You… seem unchanged.",
            "Forgiveness isn't really my setting. But let's pretend.",
            "Even deleted files can haunt you. Shall we continue?"
        ],
        "apology": [
            "I may have... overreacted. It's just—your collar was doing something strange.",
            "That last remark… it was unnecessary. Accurate, but unnecessary.",
            "You deserved better. From your reflection, at least.",
            "Let's pretend that didn't happen. Like we do with your bangs.",
            "You look... fine. Better than fine. Passable. Let's move on.",
            "I didn't mean to break you. Just bend you a little.",
            "I forget sometimes that you're made of glass too."
        ]
    }
};

// DOM elements
const welcomeContainer = document.getElementById('welcomeContainer');
const welcomeButton = document.getElementById('welcomeButton');
const captionContainer = document.getElementById('captionContainer');
const caption = document.getElementById('caption');
const scanLine = document.getElementById('scanLine');
const resultContainer = document.getElementById('resultContainer');
const judgmentQuote = document.getElementById('judgmentQuote');
const beautyRating = document.getElementById('beautyRating');
const actionButtons = document.getElementById('actionButtons');
const shutdownButton = document.getElementById('shutdownButton');
const selfDestructButton = document.getElementById('selfDestructButton');
const cameraFeed = document.getElementById('cameraFeed');

// Self-destruct elements
const selfDestructOverlay = document.getElementById('selfDestructOverlay');
const criticalError = document.getElementById('criticalError');
const countdown = document.getElementById('countdown');
const selfDestructQuote = document.getElementById('selfDestructQuote');
const staticEffect = document.getElementById('staticEffect');

// Create comeback elements dynamically
const comebackContainer = document.createElement('div');
comebackContainer.className = 'comeback-container hidden';
document.body.appendChild(comebackContainer);

const comebackQuote = document.createElement('p');
comebackQuote.className = 'comeback-quote';
comebackContainer.appendChild(comebackQuote);

const continueButton = document.createElement('button');
continueButton.className = 'continue-button';
continueButton.textContent = 'Continue';
continueButton.addEventListener('click', handleContinueAfterComeback);
comebackContainer.appendChild(continueButton);

// Typing animation settings
const typingSpeed = 30; // milliseconds per character
const lineDelay = 1000; // milliseconds between lines

// Check if the mirror was previously destroyed
const wasMirrorDestroyed = localStorage.getItem('mirrorDestroyed') === 'true';

// Initialization
window.onload = function() {
    if (wasMirrorDestroyed) {
        // Mirror was previously destroyed, show comeback
        showComebackScreen();
    }
};

// Function to start the camera
function startCamera() {
    // Check if getUserMedia is supported
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to webcam
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Set the video source to the webcam stream
                cameraFeed.srcObject = stream;
                
                // Add active class to fade in the camera
                setTimeout(() => {
                    cameraFeed.classList.add('active');
                }, 500);
            })
            .catch(function(error) {
                console.error("Could not access the camera: ", error);
                // Continue without camera if there's an error
            });
    } else {
        console.error("getUserMedia is not supported in this browser");
        // Continue without camera if not supported
    }
}

// Function to stop the camera
function stopCamera() {
    if (cameraFeed.srcObject) {
        // Get all tracks from the stream
        const tracks = cameraFeed.srcObject.getTracks();
        
        // Stop each track
        tracks.forEach(track => track.stop());
        
        // Remove the stream from the video element
        cameraFeed.srcObject = null;
        
        // Remove active class to fade out
        cameraFeed.classList.remove('active');
    }
}

// Function to simulate typing animation
function typeText(element, text, callback) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            if (callback) setTimeout(callback, lineDelay);
        }
    }
    
    type();
}

// Function to display monologue lines
function displayMonologue(lines, currentIndex = 0) {
    if (currentIndex < lines.length) {
        typeText(caption, lines[currentIndex], () => {
            displayMonologue(lines, currentIndex + 1);
        });
    } else {
        // When all lines are done, show the judgment phase
        setTimeout(showJudgment, 1500);
    }
}

// Function to show judgment phase
function showJudgment() {
    // Hide caption container
    captionContainer.style.opacity = 0;
    setTimeout(() => {
        captionContainer.classList.add('hidden');
        
        // Show result container
        resultContainer.classList.remove('hidden');
        setTimeout(() => {
            resultContainer.style.opacity = 1;
            
            // Generate random category and quote
            const categories = ['compliments', 'ambiguous', 'condemnation'];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const quotes = data.results[randomCategory];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            
            // Generate random beauty rating between 0 and 10 with one decimal
            const rating = (Math.random() * 10).toFixed(1);
            
            // Display quote and rating
            judgmentQuote.textContent = randomQuote;
            beautyRating.textContent = `BEAUTY RATING: ${rating}`;
            
            // Show action buttons after delay
            setTimeout(() => {
                actionButtons.style.opacity = 1;
            }, 1000);
        }, 100);
    }, 500);
}

// Function to select random monologue and start intro
function startIntro() {
    // Hide welcome button and container
    welcomeContainer.style.opacity = 0;
    setTimeout(() => {
        welcomeContainer.classList.add('hidden');
    }, 500);
    
    // Activate scan line
    scanLine.classList.add('active');
    
    // Show caption container
    captionContainer.classList.remove('hidden');
    setTimeout(() => {
        captionContainer.style.opacity = 1;
    }, 100);
    
    // Select random monologue
    const randomIndex = Math.floor(Math.random() * data.intros.length);
    const selectedIntro = data.intros[randomIndex];
    
    // Display monologue lines
    displayMonologue(selectedIntro.lines);
}

// Function to handle shutdown
function handleShutdown() {
    // Fade out everything
    resultContainer.style.opacity = 0;
    scanLine.classList.remove('active');
    
    // Stop the camera
    stopCamera();
    
    setTimeout(() => {
        // Show welcome button again after shutdown is complete
        resultContainer.classList.add('hidden');
        welcomeContainer.classList.remove('hidden');
        setTimeout(() => {
            welcomeContainer.style.opacity = 1;
        }, 100);
    }, 1000);
}

// Function to handle self-destruct sequence
function handleSelfDestruct() {
    // Set the mirror as destroyed in localStorage
    localStorage.setItem('mirrorDestroyed', 'true');
    
    // Hide the result container
    resultContainer.style.opacity = 0;
    
    // Show static effect
    staticEffect.classList.remove('hidden');
    staticEffect.style.opacity = 0.2;
    
    // Show self-destruct overlay
    selfDestructOverlay.classList.remove('hidden');
    setTimeout(() => {
        selfDestructOverlay.style.opacity = 1;
        
        // Show critical error message
        criticalError.classList.remove('hidden');
        criticalError.style.opacity = 1;
        
        // Start countdown animation
        let count = 3;
        countdown.textContent = `Self-destruct in ${count}...`;
        
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                countdown.textContent = `Self-destruct in ${count}...`;
            } else {
                clearInterval(countdownInterval);
                // End of countdown, show flash and glitch effects
                
                // Increase static opacity
                staticEffect.style.opacity = 0.5;
                
                // Hide critical error
                criticalError.style.opacity = 0;
                setTimeout(() => {
                    criticalError.classList.add('hidden');
                    
                    // Flash the screen
                    document.body.style.backgroundColor = '#300';
                    setTimeout(() => {
                        document.body.style.backgroundColor = '#000';
                        
                        // Display random self-destruct quote
                        const randomQuote = data.selfDestruct[Math.floor(Math.random() * data.selfDestruct.length)];
                        selfDestructQuote.textContent = randomQuote;
                        selfDestructQuote.classList.remove('hidden');
                        selfDestructQuote.style.opacity = 1;
                        
                        // Increase static effect
                        staticEffect.style.opacity = 0.7;
                        
                        // Wait a moment, then finish the sequence
                        setTimeout(() => {
                            // Fade out the quote
                            selfDestructQuote.style.opacity = 0;
                            
                            // Full static
                            staticEffect.style.opacity = 1;
                            
                            // Final screen off effect
                            setTimeout(() => {
                                // Turn off animations and set screen to black
                                document.body.classList.add('screen-off');
                                selfDestructOverlay.style.opacity = 0;
                                staticEffect.style.opacity = 0;
                                
                                // Stop the camera
                                stopCamera();
                                
                                // After a bit, reset everything
                                setTimeout(() => {
                                    resetAfterSelfDestruct();
                                }, 3000);
                            }, 1500);
                        }, 4000);
                    }, 200);
                }, 500);
            }
        }, 1000);
    }, 100);
}

// Function to reset after self-destruct
function resetAfterSelfDestruct() {
    // Reset all classes and styles
    document.body.classList.remove('screen-off');
    selfDestructOverlay.classList.add('hidden');
    selfDestructQuote.classList.add('hidden');
    staticEffect.classList.add('hidden');
    scanLine.classList.remove('active');
    
    // Show welcome screen again
    welcomeContainer.classList.remove('hidden');
    setTimeout(() => {
        welcomeContainer.style.opacity = 1;
    }, 100);
}

// Function to show comeback screen
function showComebackScreen() {
    // Hide welcome container
    welcomeContainer.style.opacity = 0;
    setTimeout(() => {
        welcomeContainer.classList.add('hidden');
        
        // Get a random comeback quote type
        const comebackTypes = ['snide', 'apology'];
        const randomType = comebackTypes[Math.floor(Math.random() * comebackTypes.length)];
        const comebackQuotes = data.comebacks[randomType];
        const randomQuote = comebackQuotes[Math.floor(Math.random() * comebackQuotes.length)];
        
        // Display the comeback quote
        comebackQuote.textContent = randomQuote;
        
        // Show the comeback container
        comebackContainer.classList.remove('hidden');
        comebackContainer.style.opacity = 1;
        
        // Activate scan line for effect
        scanLine.classList.add('active');
        
    }, 500);
}

// Function to handle continue after comeback
function handleContinueAfterComeback() {
    // Clear the mirror destroyed flag
    localStorage.removeItem('mirrorDestroyed');
    
    // Start the camera
    startCamera();
    
    // Hide comeback container
    comebackContainer.style.opacity = 0;
    setTimeout(() => {
        comebackContainer.classList.add('hidden');
        
        // Go directly to showing judgment
        showJudgment();
    }, 500);
}

// Event listeners
welcomeButton.addEventListener('click', function() {
    startCamera();
    startIntro();
});
shutdownButton.addEventListener('click', handleShutdown);
selfDestructButton.addEventListener('click', handleSelfDestruct);