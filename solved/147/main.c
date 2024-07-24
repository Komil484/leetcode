struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* insertionSortList(struct ListNode* head)
{
    if (!head || !head->next) return head;

    struct ListNode *curr, *next_node = head->next, *last = head, *iter;

    while (next_node) {
        last->next = next_node;
        iter = head;
        curr = next_node;
        next_node = next_node->next;
        last->next = 0;
        if (curr->val <= iter->val) {
            curr->next = head;
            head = curr;
            continue;
        } 
        while (iter->next && iter->next->val < curr->val) {
            iter = iter->next;
        }
        curr->next = iter->next;
        iter->next = curr;
        if (last->next == curr) last = curr;
    }

    return head;
}

#include <stdio.h>

#define SIZE 19

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

int main(void)
{
    struct ListNode list[SIZE];

    for (int i = 0; i < SIZE - 1; ++i) {
        list[i].val = ((109 * i + 89) % 101) % 10;
        list[i].next = &list[i+1];
    }
    list[SIZE - 1].val = ((109 * (SIZE - 1) + 89) % 101) % 10;
    list[SIZE - 1].next = 0;

    printf("\nlist:\n");
    print_list(list);
        
    struct ListNode *list_sorted = insertionSortList(list);

    printf("\nsorted:\n");
    print_list(list_sorted);

    return 0;
}
