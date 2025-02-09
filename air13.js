const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

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
  const filenames = fs.readdirSync(__dirname);
  const filesWanted = filenames.filter((file) => path.extname(file) === ".js");
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

const unitsTests = () => {
  const tests = [
    {
      exercise: "air00.js",
      entries: ['"Bonjourtout le monde"', '"Bonjour\ntout\tle monde"'],
      results: [
        "[ 'Bonjourtout', 'le', 'monde' ]",
        "[ 'Bonjour', 'tout', 'le', 'monde' ]",
      ],
    },
  ];
  return tests;
};

const executeTest = (tests) => {
  let totalSuccess = 0;
  tests.forEach((exercise) => {
    exercise.entries.forEach((entry, index) => {
      const result = exercise.results[index];
      const exerciseName = exercise.exercise;

      exec(`node ${exerciseName} ${entry}`, function (error, stdout, stderr) {
        const stdoutCleared = stdout.split("\n")[0];
        if (error !== null) {
          console.error("exec error: " + error);
        }
        if (stdoutCleared === result) {
          console.log(
            `${exerciseName} (${index + 1}/${
              exercise.results.length
            }) : success`
          );
          totalSuccess++;
        } else {
          console.log(
            `${exerciseName} (${index + 1}/${
              exercise.results.length
            }) : failure`
          );
        }
      });
    });
  });
  return totalSuccess;
};

const getTestsResults = () => {
  const filesRequired = getFilesRequired();
  const filesWanted = getFilesWanted();
  const files = isValidFiles(filesRequired, filesWanted);
  if (!files) return;
  return executeTest(unitsTests());
};

console.log(getTestsResults());
