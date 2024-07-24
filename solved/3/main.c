int isCharIn(char* s, char c, int n) {
    for (int i = 0; *s && i < n; ++i, ++s) {
        if (*s == c) return 1;
    }
    return 0;
}

int lengthOfLongestSubstring(char* s) {
    int max = 0;
    for (; *s; ++s) {
        int curr = 0;
        while (s[curr] && !isCharIn(s, s[curr], curr)) ++curr;
        if (curr > max) max = curr;
    }
    return max;
}
