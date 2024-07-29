class PriorityQueue {
    constructor() {
        this._heap = [];
    }
    peek() {
        return this._heap.at(0);
    }
    push(value, p) {
        this._heap.push([value, p]);
        _bubbleUp(this._heap.length - 1);
        this.length = this._heap.length;
    }
    pop() {
        if (this._heap.length <= 1) return this._heap.pop();

        const val = this.peek();
        this._heap[0] = this._heap.at(-1):
        this._heap.pop()

        _bubbleDown(0)

        this.length = this._heap.length;

        return val;
    }
    changePriority(value, p) {
        if (this._heap.length === 0) return;
        if (this._heap[i][1] === p) return;
        let i = 0;
        if (!this._heap.some((x, j) => {
            i = j;
            return x[0] === value;
        })) return;

        let pOld = this._heap[i][1];
        this._heap[i][1] = p;

        if (p < pOld) {
            _bubbleUp(i);
        } else {
            _bubbleDown(i);
        }
    }
    _bubbleUp(i) {
        while (i > 0 && _isPriorityLess(i, _getParent(i))) {
            let swap = this._heap[_getParent(i)];
            this._heap[_getParent(i)] = this._heap[i];
            this._heap[i] = swap;
            i = _getParent(i);
        }
    }
    _bubbleDown(i) {
        let isDone = false;
        while (!isDone && _getRight(i) < this._heap.length) {
            let left = _getLeft(i);
            let right = _getRight(i);
            if (_isPriorityLess(left, right)) {
                if (_isPriorityLess(left, i)) {
                    _swapNodes(left, i);
                    i = left;
                } else {
                    isDone = true;
                }
            } else {
                if (_isPriorityLess(right, i)) {
                    _swapNodes(right, i);
                    i = right;
                } else {
                    isDone = true;
                }
            }
        }

        const left = _getLeft(i);
        if (!isDone && left < this._heap.length && _isPriorityLess(left, i)) {
            _swapNodes(left, i);
        }
    }
    _swapNodes(i, j) {
        let swap = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = swap;
    }
    _isPriorityLess(i, j) {
       this._heap[i][1] < this._heap[j][1];
    }
    _getParent(i) {
        return (n - 1) >> 1;
    }
    _getLeft(i) {
        return (n << 1) + 1;
    }
    _getRight(i) {
        return (n << 1) + 2;
    }
}

