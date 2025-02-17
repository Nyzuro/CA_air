const { readdirSync } = require("fs");
const { extname } = require("path");
const { execSync } = require("child_process");
const tests = require("./tests.json");

const getFilesRequired = () => {
  const filesRequired = [
    "air00.js",
    "air01.js",
    "air02.js",
    "air03.js",
    "air04.js",
    "air05.js",
    "air06.js",
    "air07.js",
    "air08.js",
    "air09.js",
    "air10.js",
    "air11.js",
    "air12.js",
  ];
  return filesRequired;
};

const getFilesWanted = () => {
  const filenames = readdirSync(__dirname);
  const filesWanted = filenames.filter((file) => extname(file) === ".js");
  filesWanted.pop();
  return filesWanted;
};

const isValidFiles = (filesRequired, filesWanted) => {
  if (filesRequired.length !== filesWanted.length) {
    console.error("Le nombre de fichier n'est pas le meme");
    return;
  }
  for (const file of filesWanted) {
    if (!filesRequired.includes(file)) {
      console.error("Fichier non requis");
      return;
    }
  }
  return filesWanted;
};

const checkTest = (
  stdoutCleared,
  result,
  exerciseName,
  index,
  exercise,
  totalSuccess
) => {
  if (stdoutCleared === result) {
    console.log(
      `${exerciseName} (${index + 1}/${exercise.results.length}) : success`
    );
    totalSuccess++;
  } else {
    console.log(
      `${exerciseName} (${index + 1}/${exercise.results.length}) : failure`
    );
  }
  return totalSuccess;
};

const executeTest = (tests) => {
  let totalSuccess = 0;
  let numberOfTests = 0;
  for (const exercise of tests) {
    for (let index = 0; index < exercise.entries.length; index++) {
      const entry = exercise.entries[index];
      const result = exercise.results[index];
      const exerciseName = exercise.exercise;

      try {
        const stdout = execSync(`node ${exerciseName} ${entry}`).toString();
        let stdoutCleared;
        stdoutCleared = stdout.split("\n")[0];
        if (exerciseName === "air11.js") {
          stdoutCleared = stdout.split("").join("");
        }
        totalSuccess = checkTest(
          stdoutCleared,
          result,
          exerciseName,
          index,
          exercise,
          totalSuccess
        );
      } catch (error) {
        console.error(`exec error: ${error}`);
      }
      numberOfTests++;
    }
  }
  console.log(`Total success : (${totalSuccess}/${numberOfTests})`);
};

const getTestsResults = () => {
  const filesRequired = getFilesRequired();
  const filesWanted = getFilesWanted();
  const files = isValidFiles(filesRequired, filesWanted);
  if (!files) return;
  return executeTest(tests);
};

getTestsResults();
