const consoleInput = document.getElementById("consoleInput");
const consoleOutput = document.getElementById("consoleOutput");

function printLine(text = "") {
  const line = document.createElement("div");
  line.textContent = text;
  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function cmd(name, desc) {
  return `  - ${name.padEnd(12)} : ${desc}`;
}

/* Initial Welcome */
printLine("Jugraj Singh Pelia - Data Analyst");
printLine("SQL | Python | Power BI | Data Analytics");
printLine("");
printLine("Type 'menu' to explore available commands.");
printLine("");

function showMenu() {
  printLine("");
  printLine("Available Commands");
  printLine("--------------------------------------------------");
  printLine("");

  const commands = [
    ["about", "About me"],
    ["skills", "Technical skills"],
    ["experience", "Professional experience"],
    ["projects", "Project portfolio"],
    ["github", "Open GitHub"],
    ["linkedin", "Open LinkedIn"],
    ["resume", "Download resume"],
    ["contact", "Contact information"],
    ["clear", "Clear console"],
    ["menu", "Show command list"]
  ];

  commands.forEach(([name, desc]) => {
    printLine(cmd(name, desc));
  });

  printLine("");
}

function showAbout() {
  printLine("");
  printLine("Data Analyst with strong foundation in SQL, Python,");
  printLine("Excel, and Power BI. Experienced in data cleaning,");
  printLine("EDA, dashboard creation, and insight generation.");
  printLine("");
}

function showSkills() {
  printLine("");
  printLine("Technical Skills");
  printLine("--------------------------------------------------");
  printLine("");
  printLine("Programming & Querying:");
  printLine("  - SQL");
  printLine("  - Python");
  printLine("");
  printLine("Data Visualization:");
  printLine("  - MS Excel");
  printLine("  - Power BI");
  printLine("");
  printLine("Analytical:");
  printLine("  - Data Cleaning");
  printLine("  - Exploratory Data Analysis");
  printLine("  - Descriptive Statistics");
  printLine("");
}

function showExperience() {
  printLine("");
  printLine("Professional Experience");
  printLine("==================================================");
  printLine("");
  printLine("Cybersecurity Intern - Whizhack Technologies (2025)");
  printLine("  - Executed QA testing across 10+ modules");
  printLine("  - Reported 30+ bugs");
  printLine("  - Improved workflows by 25%");
  printLine("");
  printLine("Data Analyst Intern - DecisionTree Analytics (2023)");
  printLine("  - Analyzed 20,000+ records");
  printLine("  - Built Power BI dashboards");
  printLine("");
  printLine("Data Analyst Intern - DecisionTree Analytics (2022)");
  printLine("  - Wrote complex SQL queries");
  printLine("");
}

function showProjects() {
  printLine("");
  printLine("Projects");
  printLine("==================================================");
  printLine("");
  printLine("Crypto Forecasting & Investment Dashboard (2025)");
  printLine("  - LSTM-based forecasting system");
  printLine("  - Binance API integration");
  printLine("  - Streamlit dashboard");
  printLine("  - 18–25% improved ROI vs baseline");
  printLine("");
}

function showContact() {
  printLine("");
  printLine("Contact Information");
  printLine("--------------------------------------------------");
  printLine("");
  printLine("Phone    : +91-xxxxxxx");
  printLine("Email    : jugrajsinghpelia@gmail.com");
  printLine("LinkedIn : linkedin.com/in/jugrajsinghpelia");
  printLine("");
}

consoleInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = consoleInput.value.trim().toLowerCase();

    printLine(`[JSP@portfolio] > ${command}`);
    printLine("");

    switch (command) {
      case "about":
        showAbout();
        break;
      case "skills":
        showSkills();
        break;
      case "experience":
        showExperience();
        break;
      case "projects":
        showProjects();
        break;
      case "github":
        window.open("https://github.com/dev-FeNiX", "_blank");
        printLine("Opening GitHub...");
        break;
      case "linkedin":
        window.open("https://linkedin.com/in/jugrajsinghpelia", "_blank");
        printLine("Opening LinkedIn...");
        break;
      case "resume":
        window.open("resume.pdf", "_blank");
        printLine("Opening resume...");
        break;
      case "contact":
        showContact();
        break;
      case "menu":
        showMenu();
        break;
      case "clear":
        consoleOutput.innerHTML = "";
        break;
      default:
        printLine("Command not found. Type 'menu' to see commands.");
    }

    printLine("");
    consoleInput.value = "";
  }
});