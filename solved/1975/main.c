long long maxMatrixSum(int **matrix, int matrixSize, int *matrixColSize)
{
    long long total = 0;
    int parity = 0;
    int min = matrix[0][0];
    if (min < 0) {
        min = -min;
    }

    for (int i = 0; i < matrixSize; ++i) {
        for (int j = 0; j < matrixSize; ++j) {
            int n = matrix[i][j];

            if (n < 0) {
                parity = 1 - parity;
                n = -n;
            }

            total += n;

            if (n < min) {
                min = n;
            }
        }
    }

    return total - parity * (2 * min);
}
