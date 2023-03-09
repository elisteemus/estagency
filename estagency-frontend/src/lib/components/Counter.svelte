<script lang="ts">
	export let count: number;

	function incrementCount(): void {
		count += 1;
	}
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
		on:click={incrementCount}>
The count is {count}
</button>