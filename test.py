class Solution:
    def convert(self, s: str, numRows: int) -> str:
        matrix = []
        for i in range(numRows):
            temp = []
            matrix.append(temp)

        direction = 1
        rowNumber = 1
        for char in s:
            if rowNumber == 1:
                matrix[rowNumber-1].append(char)
                direction = 1
                rowNumber += direction
            elif rowNumber == numRows:
                matrix[rowNumber-1].append(char)
                direction = -1
                rowNumber += direction
            else:
                matrix[rowNumber-1].append(char)
                rowNumber += direction

        result = ''
        for array in matrix:
            for element in array:
                result += element

        return result

sample = Solution()
result = sample.convert("AB", 1)
if result == "PAHNAPLSIIGYIR":
    print('correct')