    var arr = [ 12, 71, 19, 15, 6, 10 ];
	var arr_size = arr.length;

	console.log( "Input array is");
    console.log(arr);

	mergeSort(arr, 0, arr_size - 1);

	console.log( "Sorted array is");
    console.log(arr);
    

    function mergeSort(array,left,right){

        if(left>=right){
            return;
        }
        var middle= parseInt((left+right)/2);
        mergeSort(array,left,middle);
        mergeSort(array,middle+1,right);
        merge(array,left,middle,right);


    }

    
    function merge(arr,l,m,r){

	//getting array lengths
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}
    }