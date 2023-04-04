<script>
    import { onMount } from "svelte";

    export let name;
    export let specialty;
    export let img;

    const imageSrc = async (tag) => await import(`../images/${tag}.png`).catch(e => console.log(e));
</script>

<div class="flex border border-stone-200 rounded-xl">
    <div class="py-6 px-6 2xl:pl-14">
        <img src={imageSrc(name).default} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
    </div>
    <div class="block">
        <div><h5 class="font-medium pt-8 text-slate-600">{name}</h5></div>
        <div><h5 class="font-medium pt-1 text-slate-800 text-lg leading-5">{specialty}</h5></div>
        <div class="pt-2"><a href="partners/andres" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
    </div>
</div>