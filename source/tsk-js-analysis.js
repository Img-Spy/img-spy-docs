// analysis.js
const { TSK } = require("tsk-js");

main(process.argv[0]);

////

function searchRecursive(needle, img, imgaddr, inode, cb) {
    const files = img.list({ imgaddr, inode });
    files
        .filter((f) => f.name === needle)
        .forEach((f) => cb(f));
 
    files
        .filter((f) => f.type === "directory")
        .forEach((f) => searchRecursive(needle, img, imgaddr, f.inode, cb));
}

function analyzePartition(img, imgaddr) {
    // Search file
    searchRecursive("carta.txt", img, imgaddr, undefined, (file) => {
        const { inode } = file;
        const buff = img.get({ imgaddr, inode });

        console.log("File found!");
        console.log("Print it's content:");
        console.log("---------------------------");
        console.log(buff.toString());
        console.log("---------------------------");
    });

    // Generate timeline
    const timeline = img.timeline(() => {}, { imgaddr });
    console.log("Timeline length '" + timeline.length + "'");
}

function analyzeDisk(img, res) {
    res.partitions
        .filter((p) => p.hasFs)
        .forEach((p) => analyzePartition(img, p.start));
}

function main(imgfile) {
    const img = new TSK(imgfile);
    const res = img.analyze();
    if (res.type === "disk") {
        analyzeDisk(img, res);
    } else {
        analyzePartition(img, 0);
    }
}

