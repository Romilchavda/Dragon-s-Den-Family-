// Sample data for alliance members
const members = [
    { name: "Chief1", rank: "Leader", trophies: 2500 },
    { name: "Chief2", rank: "Co-Leader", trophies: 2400 },
    { name: "Chief3", rank: "Elder", trophies: 2200 },
    { name: "Chief4", rank: "Member", trophies: 2000 }
];

// Function to display members
function displayMembers() {
    const membersList = document.getElementById("members-list");
    membersList.innerHTML = ""; // Clear any existing members

    members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member");

        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>Rank: ${member.rank}</p>
            <p>Trophies: ${member.trophies}</p>
        `;

        membersList.appendChild(memberDiv);
    });
}

// Call the function when the page loads
window.onload = displayMembers;
