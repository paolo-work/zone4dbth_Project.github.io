// Mapping data for characters and levels
const statsData = {
    ray: {
        1: { hitAtk: 100, gripAtk: 100, teamAtk: 100, hitDef: 50, gripDef: 50, teamDef: 50, hp: 1000, sp: 500, critical: '2.0%', criticalDmg: '10.0%' },
        10: { hitAtk: 300, gripAtk: 300, teamAtk: 300, hitDef: 150, gripDef: 150, teamDef: 150, hp: 3000, sp: 1500, critical: '4.0%', criticalDmg: '20.0%' },
        30: { hitAtk: 610, gripAtk: 610, teamAtk: 610, hitDef: 542, gripDef: 542, teamDef: 542, hp: 7793, sp: 3342, critical: '6.0%', criticalDmg: '50.0%' }
    },
    max: {
        1: { hitAtk: 90, gripAtk: 90, teamAtk: 90, hitDef: 45, gripDef: 45, teamDef: 45, hp: 900, sp: 450, critical: '1.5%', criticalDmg: '8.0%' },
        10: { hitAtk: 280, gripAtk: 280, teamAtk: 280, hitDef: 140, gripDef: 140, teamDef: 140, hp: 2800, sp: 1400, critical: '3.5%', criticalDmg: '18.0%' },
        30: { hitAtk: 590, gripAtk: 590, teamAtk: 590, hitDef: 520, gripDef: 520, teamDef: 520, hp: 7500, sp: 3200, critical: '5.5%', criticalDmg: '48.0%' }
    },
    wells: {
        1: { hitAtk: 80, gripAtk: 80, teamAtk: 80, hitDef: 40, gripDef: 40, teamDef: 40, hp: 800, sp: 400, critical: '1.0%', criticalDmg: '5.0%' },
        10: { hitAtk: 250, gripAtk: 250, teamAtk: 250, hitDef: 120, gripDef: 120, teamDef: 120, hp: 2500, sp: 1200, critical: '3.0%', criticalDmg: '15.0%' },
        30: { hitAtk: 570, gripAtk: 570, teamAtk: 570, hitDef: 500, gripDef: 500, teamDef: 500, hp: 7200, sp: 3000, critical: '5.0%', criticalDmg: '45.0%' }
    }
};

// DOM elements
const characterDropdown = document.getElementById("character");
const levelDropdown = document.getElementById("level");
const statusText = document.getElementById("status");
const statsElements = {
    hitAtk: document.getElementById("hitAtk"),
    gripAtk: document.getElementById("gripAtk"),
    teamAtk: document.getElementById("teamAtk"),
    hitDef: document.getElementById("hitDef"),
    gripDef: document.getElementById("gripDef"),
    teamDef: document.getElementById("teamDef"),
    hp: document.getElementById("hp"),
    sp: document.getElementById("sp"),
    critical: document.getElementById("critical"),
    criticalDmg: document.getElementById("criticalDmg")
};

// Update stats function
function updateStats() {
    const selectedCharacter = characterDropdown.value;
    const selectedLevel = levelDropdown.value;
    const stats = statsData[selectedCharacter][selectedLevel];

    // Update stats
    for (const stat in stats) {
        statsElements[stat].textContent = stats[stat];
    }

    // Update status text
    statusText.textContent = `Status Default / ${capitalize(selectedCharacter)} Level ${selectedLevel}`;
}

// Utility function to capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Event listeners
characterDropdown.addEventListener("change", updateStats);
levelDropdown.addEventListener("change", updateStats);

// Initialize with default values
updateStats();
