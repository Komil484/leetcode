#include <limits.h>

int reverse(int x) {
    const unsigned int INT_MAX_10 = INT_MAX / 10;
    const unsigned int INT_LAST_DIGIT = INT_MAX % 10;

    unsigned int result = 0;
    int sign = (x < 0) ? -1 : 1;

    // edge cases
    if (x == INT_MIN) return 0;
    if (x == 0) return 0;
    
    x = x * sign;

    int next_num;
    while (x) {
        next_num = x % 10;

        // check if overflow is going to happen
        if (result > INT_MAX_10 || (result == INT_MAX_10 && next_num > INT_LAST_DIGIT)) return 0;

        result *= 10;
        result += next_num;
        x /= 10;
    }

    return result * sign;
}
