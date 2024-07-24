#include <stdlib.h>
#include <string.h>

#define MAX_STR_LEN 1000

char isPalDynamic(char (*matrix)[MAX_STR_LEN], char* s, int i, int j)
{
    if (matrix[i][j]) return matrix[i][j];

    return (matrix[i][j] = (s[i] == s[j] && isPalDynamic(matrix, s, i + 1, j - 1) + 1) * 2 - 1);
}

char* longestPalindrome(char* s)
{
    char (*matrix)[MAX_STR_LEN] = calloc(1000 * 1000, sizeof(char));

    int len = strlen(s);
    
    for (int i = 0; i < len; ++i) {
        matrix[i][i] = 1;
    }

    for (int i = 1; i < len; ++i) {
        matrix[i-1][i] = (s[i-1] == s[i]) * 2 - 1;
    }

    for (int l = len - 1; l >= 0; --l) {
        for (int i = 0; i < len - l; ++i) {
            if (isPalDynamic(matrix, s, i, i + l) == 1) {
                char *result = malloc(sizeof(char) * (l + 2));
                strncpy(result, s + i, l + 1);
                result[l + 1] = 0;
                return result;
            }
        }
    }
    
    char* a = calloc(2, sizeof(char));
    *a = *s;
    return a;
}


// debug

#include <stdio.h>

int main()
{
    char s[] = "babad";
    printf("s = %s\n", s);
    printf("output = %s\n", longestPalindrome(s));
}
