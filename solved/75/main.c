void sortColors(int* nums, int numsSize) {
    unsigned r = 0, g = 0, b = 0;
    
    for (int *pt = nums; pt < nums + numsSize; ++pt) {
        if (*pt == 0) {
            ++r;
        } else if (*pt == 1) {
            ++g;
        } else {
            ++b;
        }
    }

    for (int *pt = nums; pt < nums + r; ++pt) {
        *pt = 0;
    }
    for (int *pt = nums + r; pt < nums + r + g; ++pt) {
        *pt = 1;
    }
    for (int *pt = nums + r + g; pt < nums + numsSize; ++pt) {
        *pt = 2;
    }
}
