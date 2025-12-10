const Page = () => {

    const binary_srch = (arr: number[], item: number) => {
        let low = 0
        let high = arr.length - 1

        while (low <= high) {
            const mid = Math.floor((low + high) / 2)

            if (arr[mid] === item) {
                return mid
            }

            if (arr[mid] < item) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        return null
    }

    const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(binary_srch(tempArr, 8));

    function binarySearchGeneric<T>(
        arr: T[],
        target: T,
        compareFn?: (a: T, b: T) => number
    ) {
        let left = 0;
        let right = arr.length - 1;

        const compare = compareFn || ((a: T, b: T) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const comparison = compare(arr[mid], target);

            if (comparison === 0) {
                return mid;
            }

            if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null
    }

    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    console.log(binarySearchGeneric(words, 'cherry'));

    const users = [
        { id: 1, name: 'Ali' },
        { id: 3, name: 'Sara' },
        { id: 5, name: 'Reza' },
        { id: 7, name: 'Mina' }
    ];

    console.log(
        binarySearchGeneric(
            users,
            { id: 5, name: '' },
            (a, b) => a.id - b.id
        ));



}

export default Page;