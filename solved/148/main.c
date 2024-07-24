struct ListNode {
    int val;
    struct ListNode *next;
};

#include <stdio.h>

void print_list(struct ListNode*);

struct ListNode* merge(struct ListNode* list1, struct ListNode* list2, struct ListNode** last)
{
    if (!list1 || !list2) {
        if (last) {
            struct ListNode *end = list1 ? list1 : list2;
            if (end) {
                while (end->next) {
                    end = end->next;
                }
            }
            *last = end;
        }
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

    if (last) {
        while (list1->next) {
            list1 = list1->next;
        }
        *last = list1;
    }

    return result;
}

struct ListNode* get_next(struct ListNode* node, unsigned n)
{ 
    if (!node) return 0;
    for (int i = 0; i < n; ++i) {
        if (!node->next) return 0;
        node = node->next;
    }
    return node;
}

unsigned int get_list_len(struct ListNode* head)
{
    if (!head) return 0;
    unsigned int length = 1;
    while (head->next) {
        ++length;
        head = head->next;
    }
    return length;
}

struct ListNode* sortList(struct ListNode* head)
{
    if (!head || !head->next) return head;

    struct ListNode *next_node, *current, *second, *last, *prev_last;

    unsigned int const length = get_list_len(head);
    unsigned int n = 1;
    _Bool is_first;
    
    while (n < length) { // loops ~log(n) times with each iteration being O(n) steps, total time cmplx O(nlogn)
        current = head;
        is_first = 1;
 
        while (current) {
            last = get_next(current, n-1);
            second = get_next(last, 1);
            if (last) last->next = 0;

            last = get_next(second, n-1);
            next_node = get_next(last, 1);
            if (last) last->next = 0;

            current = merge(current, second, &last);
            last->next = next_node;

            if (is_first) {
                head = current;
            } else {
                prev_last->next = current;
            }

            prev_last = last;
            current = next_node;
            is_first = 0;
        }
        n <<= 1;
    }

    return head;
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

#define SIZE 20

void test()
{
    printf("test starting\n");
    struct ListNode list[5];

    for (int i = 0; i < 4; ++i) {
        list[i].val = i+1;
        list[i].next = &list[i+1];
    }
    list[3].next = 0;
    
    struct ListNode *last;

    print_list(list);
    print_list(merge(list, 0, &last));
    
    print_list(last);
    printf("test done\n");
}

int main(void)
{
    test();

    struct ListNode list[SIZE];

    for (int i = 0; i < SIZE - 1; ++i) {
        list[i].val = ((109 * i + 89) % 101) % 10;
        list[i].next = &list[i+1];
    }
    list[SIZE - 1].val = ((109 * (SIZE - 1) + 89) % 101) % 10;
    list[SIZE - 1].next = 0;

    printf("\nlist:\n");
    print_list(list);
        
    struct ListNode *list_sorted = sortList(list);

    printf("\nsorted:\n");
    print_list(list_sorted);

    return 0;
}
