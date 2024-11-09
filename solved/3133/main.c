long long minEnd(int n, int x)
{
    long long res = x;
    long long N = n - 1;
    for (int i = 0; N && i < 64; ++i) {
        if (res & (1LL << i))
            continue;

        res |= (N & 1LL) << i;
        N >>= 1;
    }
    return res;
}

#include <stdio.h>

int main(void)
{
    printf("result: %lld\n", minEnd(3, 4));

    return 0;
}
