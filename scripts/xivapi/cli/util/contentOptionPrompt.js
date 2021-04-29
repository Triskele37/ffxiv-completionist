module.exports = function contentOptionPrompt(rl, content, prompt) {
    console.clear();

    // Prompt question
    rl.write(`${prompt}\n`);

    // Content options
    content.forEach((c, i) => rl.write(`\n${i}. ${c.content}`));

    // Back option
    rl.write(`\n${content.length}. Back\n`);
};
