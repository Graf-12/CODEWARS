function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${queue.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!`
    }
}
