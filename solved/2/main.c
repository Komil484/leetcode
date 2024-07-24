/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include <stdlib.h>

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* result = malloc(sizeof(struct ListNode));
    struct ListNode* current = result;
    int carry = 0;
    
    int total;
    while (l1->next && l2->next) {
        total = l1->val + l2->val + carry;
        total -= 10 * (carry = total >= 10);
        current->val = total;
        current->next = malloc(sizeof(struct ListNode));
        current = current->next;
        l1 = l1->next;
        l2 = l2->next;
    }

    total = l1->val + l2->val + carry;
    total -= 10 * (carry = total >= 10);
    current->val = total;

    
    l1 = l2->next ? l2 : l1;

    while (l1->next) {
        l1 = l1->next;
        total = l1->val + carry;
        total -= 10 * (carry = total >= 10);
        current->next = malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = total;
    }

    if (carry) {
        current->next = malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = carry;
    }

    current->next = NULL;
    return result;
}
