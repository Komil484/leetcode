#include <stdlib.h>
#include <string.h>
#include <math.h>

char* convert(char* s, int numRows)
{
    if (numRows == 1) return s;
    int length = strlen(s);
    int arr_size = ceil((double)length / (numRows - 1)) + 1;
    char **chars = malloc(numRows * sizeof(char*));
    for (int i = 0; i < numRows; ++i) {
        chars[i] = calloc(arr_size, sizeof(char));
    }
    char *result = calloc(length+1, sizeof(char));
    int *ptrs = calloc(numRows, sizeof(int));
    
    int curr = 0;
    int direction = 1;
    for (int i = 0; i < length; ++i) {
        chars[curr][ptrs[curr]++] = s[i];
        curr += direction;
        if (curr == numRows - 1) direction = -1;
        else if (curr == 0) direction = 1;
    }

    int i = 0;
    for (int row = 0; row < numRows; ++row) {
        for (int col = 0; chars[row][col]; ++col) {
            result[i] = chars[row][col];
            ++i;
        }
    }

    for (int i = 0; i < numRows; ++i) {
        free(chars[i]);
    }
    free(chars);
    free(ptrs);

    return result;
}

// debug

#include <stdio.h>

int main()
{
    char s[] = "PAYPALISHIRING";
    printf("s = %s\n", s);
    printf("3 = %s\n", convert(s, 3));
    printf("4 = %s\n", convert(s, 4));

    return 0;
}
