
<script>
    import { onMount } from "svelte";
    
    import { database } from '../../firebase.js';
    import { ref, get } from "firebase/database";

    import puzzle from '$lib/images/puzzlet.png';
    import Merliin from '$lib/images/Merliin.png';
    import Andres from '$lib/images/Andres.png';
    import Partner from '$lib/components/Partner.svelte';

    let partners = [];

    onMount(async () => {
        try {
            let response = (await get(ref(database), 'Partner')).val().Partner;
            console.log(response);
            partners = Object.values(response);
            partners.forEach(p => console.log(p));
            console.log(partners);
        } catch (error) {
            console.error("Failed to fetch partners:", error);
        }
    });
</script>

<div>
    <img src={puzzle} alt="puzzle pieces" class="w-full pt-4">
</div>

<br><br><br>

<div class="bg-stone-100 mx-auto w-7/12 2xl:w-6/12 pt-28 px-28 pb-20">
    <h1 class="font-bold text-xl text-stone-800">Our Story</h1>
    <br>
    <div class="bg-stone-300 w-auto h-px"></div>
    <br>
    <p class="text-justify text-stone-700 tracking-wide">
        We are marketeers united - all excelling in our own field - PR, online and offline marketing, media, 
        film production and project management. We work together under <b>ESTAGENCY</b>. 
        All together or on our own - as you wish.
        <br><br>
        We have combined experience of over 100 years and skills to do what's most important - we deliver, 
        what we promise. No mambo-jambo! And if there may be a need for some specific knowledge or 
        extraordinary experience, we know where to ask.
    </p>
</div>

<br><br>

<div class="pt-6">
    <h3 class="flex justify-center text-estpurple text-2xl font-medium">Meet the team</h3>
</div>

<br><br>

<div class="grid grid-cols-3 gap-4 px-36 2xl:px-80">
    {#each partners as partner}

        <Partner {...partner}/>

    {/each}
    <div class=" flex border border-stone-200 rounded-xl">
        <div class="py-6 px-6 2xl:pl-14">
            <img src={Merliin} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
        </div>
        <div class="block">
            <div><h5 class="font-medium pt-8 text-slate-600">Merliin</h5></div>
            <div><h5 class="font-medium pt-1 text-slate-800 text-lg leading-5">Video<br>Production</h5></div>
            <div class="pt-2"><a href="partners/merliin" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
        </div>
    </div>
    <div class="flex border border-stone-200 rounded-xl">
        <div class="py-6 px-6 2xl:pl-14">
            <img src={Andres} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
        </div>
        <div class="block">
            <div><h5 class="font-medium pt-8 text-slate-600">Ott</h5></div>
            <div><h5 class="font-medium pt-1 text-slate-800 text-lg leading-5">Online<br>Marketing</h5></div>
            <div class="pt-2"><a href="partners/ott" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
        </div>
    </div>
    <div class="flex border border-stone-200 rounded-xl">
        <div class="py-6 px-6 2xl:pl-14">
            <img src={Merliin} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
        </div>
        <div class="block">
            <div><h5 class="font-medium pt-8 text-slate-600">Liisel</h5></div>
            <div><h5 class="font-medium pt-3 text-slate-800 text-lg leading-5">Marketing</h5></div>
            <div class="pt-5"><a href="partners/liisel" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
        </div>
    </div>
    <div class="flex border border-stone-200 rounded-xl">
        <div class="py-6 px-6 2xl:pl-14">
            <img src={Andres} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
        </div>
        <div class="block">
            <div><h5 class="font-medium pt-8 text-slate-600">Elis</h5></div>
            <div><h5 class="font-medium pt-1 text-slate-800 text-lg leading-5">Web<br>Design</h5></div>
            <div class="pt-2"><a href="partners/elis" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
        </div>
    </div>
</div>

<br><br><br><br>

<div class="w-7/12 2xl:w-6/12 mx-auto">
    <h1 class="text-3xl font-bold tracking-normal leading-snug">Do you need help to decide? <div class="inline text-estpurple">At ESTAGENCY, we're dedicated to helping you achieve your goals.
    </div></h1>
    <br>
</div>
<div class="pt-5 flex">
    <button class="mx-auto bg-estpurple hover:bg-pink-800 text-white py-2 px-12 rounded-xl">
            Get in touch
    </button>
</div>

<br><br><br><br>