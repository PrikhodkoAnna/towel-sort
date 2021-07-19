
// You should implement your task here.

module.exports = function towelSort (matrix)  {
        let resultArr = [];
        if ((typeof matrix === 'undefined') || (matrix.length === 0)) {
            return resultArr;
        }
        let columnIdx;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i % 2 === 0) {
                    columnIdx = j;
                }
                else {
                    columnIdx = (matrix[i].length - j - 1);
                }



                resultArr.push(matrix[i][columnIdx]);
            }
        }
        return resultArr;
    }
