/**
 * 在一个超市里，有一个包含
 * n
 * n 个格子的货物架，每个格子中放有一种商品，商品用小写字母 a 到 z 表示。当顾客进入超市时，他们会依次从第一个格子查找到第
 * n
 * n 个格子，寻找自己想要购买的商品。如果在某个格子中找到该商品，顾客就会购买它并离开；如果中途遇到一个空格子，或查找完所有格子还没有找到想要的商品，顾客也会离开。
 *
 * 作为超市管理员，你可以在顾客到来之前重新调整商品的顺序，以便尽可能多地出售商品。当第一个顾客进入后，商品位置不能再调整。你需要计算在最优调整下，最多可以卖出多少件商品。输入变量说明：
 *
 * n：货物架的格子数
 * m：顾客想要购买的商品种类数
 * s：货物架上商品的初始顺序
 * c：顾客想要购买的商品种类在一个超市里，有一个包含
 * n
 * n 个格子的货物架，每个格子中放有一种商品，商品用小写字母 a 到 z 表示。当顾客进入超市时，他们会依次从第一个格子查找到第
 * n
 * n 个格子，寻找自己想要购买的商品。如果在某个格子中找到该商品，顾客就会购买它并离开；如果中途遇到一个空格子，或查找完所有格子还没有找到想要的商品，顾客也会离开。
 *
 * 作为超市管理员，你可以在顾客到来之前重新调整商品的顺序，以便尽可能多地出售商品。当第一个顾客进入后，商品位置不能再调整。你需要计算在最优调整下，最多可以卖出多少件商品。输入变量说明：
 *
 * n：货物架的格子数
 * m：顾客想要购买的商品种类数
 * s：货物架上商品的初始顺序
 * c：顾客想要购买的商品种类
 */

function is_in(word01, word02) {
    if (word01.length < word02.length) return false;

    const countWord01 = word01.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const countWord02 = word02.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    for (const char in countWord02) {
        if (!countWord01.hasOwnProperty(char) || countWord01[char] < countWord02[char]) {
            return false;
        }
    }

    return true;
}

function solution(n, m, s, c) {
    // 先进行边缘判断
    if (typeof s !== "string") throw new Error("s must be a string");
    if (typeof c !== "string") throw new Error("c must be a string");
    if (s.length !== n) throw new Error("s length must match n");
    if (c.length !== m) throw new Error("c length must match m");

    // 如果 c 的长度大于或等于 s 的长度，返回 c 的长度
    if (c.length >= s.length) {
        return s.length;
    }


    // 检查 c 是否是 s 的子集
    if (is_in(s, c)) {
        return m;
    }
}

function main() {
    console.log(solution(3, 4, "abc", "abcd") === 3);
    console.log(solution(4, 2, "abbc", "bb") === 2);
    console.log(solution(5, 4, "bcdea", "abcd") === 4);
}

main();