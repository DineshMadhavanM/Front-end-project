document.getElementById('placementForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;
  const cgpa = parseFloat(document.getElementById('cgpa').value);
  const skills = document.getElementById('skills').value;
  const codechefRank = parseInt(document.getElementById('codechefRank').value);
  const leetcodeQuestions = parseInt(document.getElementById('leetcodeQuestions').value);
  const internships = document.getElementById('internships').value;
  const projects = document.getElementById('projects').value;
  const codechefID = document.getElementById('codechefID').value;
  const leetcodeID = document.getElementById('leetcodeID').value;
  const arrearsHistory = document.getElementById('arrearsHistory').value;

  
  let placementStatus = "You are eligible for placement.";

  if (cgpa < 7.5) {
    placementStatus = "You are not eligible for placement due to CGPA below 7.5.";
  } else if (arrearsHistory === "yes") {
    placementStatus = "You are not eligible for placement due to arrears.";
  } else if (codechefRank < 1200) {
    placementStatus = "You are not eligible for placement due to CodeChef rank below 1200.";
  } else if (leetcodeQuestions < 120) {
    placementStatus = "You are not eligible for placement due to fewer LeetCode questions solved.";
  }

  
  const resultDiv = document.getElementById('placementStatus');
  resultDiv.innerHTML = `
    <h3>Placement Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Department:</strong> ${department}</p>
    <p><strong>CGPA:</strong> ${cgpa}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>CodeChef Rank:</strong> ${codechefRank}</p>
    <p><strong>LeetCode Questions Solved:</strong> ${leetcodeQuestions}</p>
    <p><strong>Internships:</strong> ${internships}</p>
    <p><strong>Projects:</strong> ${projects}</p>
    <p><strong>CodeChef ID:</strong> ${codechefID}</p>
    <p><strong>LeetCode ID:</strong> ${leetcodeID}</p>
    <p><strong>Arrears History:</strong> ${arrearsHistory}</p>
    <p><strong>Placement Status:</strong> ${placementStatus}</p>
  `;
});
