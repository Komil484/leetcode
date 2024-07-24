struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2)
{
    if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }
    
    struct ListNode *temp;
    struct ListNode *result = list2->val < list1->val ? list2 : list1;
    unsigned int list = list2->val < list1->val ? 2 : 1;

    while ((list == 1 && list1->next) || (list == 2 && list2->next)) {
        if (list == 1 && list1->next->val > list2->val) {
            temp = list1;
            list1 = list1->next;
            temp->next = list2;
            list = 2;
        } else if (list == 2 && list2->next->val > list1->val) {
            temp = list2;
            list2 = list2->next;
            temp->next = list1;
            list = 1;
        } else if (list == 1) {
            list1 = list1->next;
        } else if (list == 2) {
            list2 = list2->next;
        }
    }

    if (list == 1) {
        list1->next = list2;
    } else if (list == 2) {
        list2->next = list1;
    }

    return result;
}

#include <stdio.h>

void print_list(struct ListNode* list)
{
    if (!list) return;

    printf("%d ", list->val);
    while (list->next) {
        list = list->next;
        printf("%d ", list->val);
    }
    printf("\n");
}

#define SIZE 5

int main(void)
{
    struct ListNode list1[SIZE];
    struct ListNode list2[SIZE];

    for (int i = 0; i < SIZE - 1; ++i) {
        list1[i].val = i * i;
        list1[i].next = &list1[i+1];
        list2[i].val = i;
        list2[i].next = &list2[i+1];
    }
    list1[SIZE - 1].val = (SIZE - 1) * (SIZE - 1);
    list1[SIZE - 1].next = 0;
    list2[SIZE - 1].val = SIZE - 1;
    list2[SIZE - 1].next = 0;

    print_list(list1);
    print_list(list2);

    struct ListNode *list_merged = mergeTwoLists(list1, list2);

    printf("\nmerged:\n");
    print_list(list_merged);

    return 0;
}
