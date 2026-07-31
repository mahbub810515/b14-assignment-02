   
    /* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
    function averageResponseTime(times) {
        if (Array.isArray(times) === false) {
            return "Invalid";
        }

        else if (times.length === 0) {
            return "Invalid";
        }

        let total = 0;
        if (times.every(item => typeof item === 'number')) {
            for (let i = 0; i < times.length; i++) {
                total = total + times[i];
            }
        }else{
            return "Invalid";
        }

        return total / times.length;
    }

let result = averageResponseTime([120, 200, 150, 130]);
console.log(result)
result = averageResponseTime("hello");
console.log(result)
result = averageResponseTime([]);
console.log(result)