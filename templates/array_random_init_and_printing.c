/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                 TEST
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

#include <stdio.h>
#include <stdlib.h>

#define SIZE 10

// modulo max 101, seed default 0
void randomize(int *arr, int size, int modulo, int seed) {
    for (int i = 0; i < SIZE; ++i) {
        arr[i] = ((109 * (i + seed) + 89) % 101) % modulo;
    }
}

void print_arr(int *arr, int size)
{
    for (int i = 0; i < size; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(void)
{
    int arr[SIZE];

    printf("array:\n");
    print_arr(arr, SIZE);

    int result = func();

    printf("\nresult:\n");
    printf("%d\n", result);
    
    return 0;
}
