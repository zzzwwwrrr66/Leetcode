// https://leetcode.com/problems/fair-distribution-of-cookies/


/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const graph = new Array(k).fill(0); // count만큼 list 를 작성
    let minUnfairness = Infinity; // 결과값

    const dfs = (index, count) => {
        // 조건
        if(cookies.length - index < count) return

        // 실행
        if(index === cookies.length){ // cookies 5가되면
            const maxCookies = Math.max(...graph)
            minUnfairness = Math.min(minUnfairness, maxCookies)
            return
        }

        // 재귀실행
        for(let j = 0; j < k; j++){
            count -= graph[index] === 0 ? 1 : 0
            graph[j] += cookies[index]
            dfs(index + 1, count)
            
            // 백트래킹
            graph[j] -= cookies[index]
            count += graph[j] === 0 ? 1 : 0
        }
    }
    dfs(0, k)
    return minUnfairness
};

console.log(
distributeCookies([8,15,10,20,8], 2),
distributeCookies([6,1,3,2,2,4,1,2], 3),
)