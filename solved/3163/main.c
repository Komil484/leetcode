#include <stdlib.h>

struct DStr {
    char *str;
    int sz;
    int cap;
};

int get_index_of_repeating(char *word, int index);
struct DStr init_dstr();
void append_dstr(struct DStr *dstr, char c);
void del_dstr(struct DStr *dstr);

char *compressedString(char *word)
{
    struct DStr comp = init_dstr();
    int i = 0;
    while (word[i]) {
        int index = get_index_of_repeating(word, i);
        append_dstr(&comp, index + '0');
        append_dstr(&comp, word[i]);
        i += index;
    }
    return comp.str;
}

int get_index_of_repeating(char *word, int index)
{
    char c = word[index];
    int i = 1;
    for (; i < 10 && word[index + i] != '\0' && word[index + i] == c; ++i) { }
    if (i >= 10) {
        return 9;
    }
    return i;
}

struct DStr init_dstr()
{
    struct DStr dstr = {malloc(1), 1, 1};
    dstr.str[0] = '\0';
    return dstr;
}

void append_dstr(struct DStr *dstr, char c)
{
    if (dstr->sz == dstr->cap) {
        dstr->str = realloc(dstr->str, dstr->cap * 2);
        dstr->cap *= 2;
    }

    dstr->str[dstr->sz - 1] = c;
    dstr->str[dstr->sz] = '\0';
    dstr->sz += 1;
}

void del_dstr(struct DStr *dstr)
{
    free(dstr->str);
}
