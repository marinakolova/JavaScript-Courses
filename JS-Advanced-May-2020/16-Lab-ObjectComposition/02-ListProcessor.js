function solve(data) {
    let result = [];
    for (const items of data) {
        const [command, item] = items.split(" ");

        if (item === undefined) {
            console.log(result.join(","));
        } else {
            if (command === "add") {
                result.push(item);
            } else if (command === "remove") {
                result = result.filter(x => x !== item);
            }
        }
    }
}
