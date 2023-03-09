<script lang="ts">
    import headerimg from '$lib/images/header-image.png';
    import Merliin from '$lib/images/Merliin.png';
    import Andres from '$lib/images/Andres.png';
    import Ott from '$lib/images/Ott.png';
    import terereelika from '$lib/images/terereelika.png';
</script>

<style>
.text-4-5xl {
    font-size: 2.6rem/* 36px */;
    line-height: 2.5rem/* 40px */;
}
</style>

<div class="relative">
    <div class="w-full h-screen">
        <img
            src={headerimg}
            class="object-cover w-full h-full"
            alt="Tallinn"
        />
        <div class="absolute top-28 left-20 right-80 px-4 py-2 ">
            <h1 class="text-5xl font-semibold tracking-normal leading-snug">We help businesses to transform <br>their <div class="inline text-estpurple">future.</div></h1>
            <p class="pt-6 text-lg">If you want to have a better understanding of your business and turn contacts <br> into customers with ease, you need to have a great strategy. We are here to <br> help you focus on things you need to grow your business.</p>
            <div class="pt-8">
            <button class="bg-estpurple hover:bg-pink-800 text-white py-2 px-8 rounded-xl">
                Let's talk!
            </button>
        </div>
        </div>
    </div>
</div>

<br>
<br>

<div class="pt-6">
    <h3 class="flex justify-center text-estpurple text-2xl font-medium">Meet the team</h3>
    <br>
    <p class="flex justify-center px-80 text-center">Our partners are the bridge to various insightful digital experiences - we bring<br> you advanced level marketing, deep skills in growth, video production and PR.<br> Check out their work below.</p>
</div>

<br>
<br>

<div class="grid grid-cols-3 gap-4 px-36 2xl:px-80">
    <div class="flex border border-stone-200 rounded-xl">
        <div class="py-6 px-6 2xl:pl-14">
            <img src={Andres} alt="..." class="shadow rounded-full max-w-full h-28 align-middle border-none" />
        </div>
        <div class="block">
            <div><h5 class="font-medium pt-8 text-slate-600">Andres</h5></div>
            <div><h5 class="font-medium pt-1 text-slate-800 text-lg leading-5">Marketing,<br>B2B & PR</h5></div>
            <div class="pt-2"><a href="partners/andres" class="text-xs text-slate-600 tracking-wider font-medium">SEE MORE  --></a></div>
        </div>
    </div>
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

<br>
<br>
<br>
<br>

<div class="absolute left-20">
    <h1 class="text-4-5xl font-semibold tracking-normal leading-snug">Let's find a solution <div class="inline text-estpurple">together.</div></h1>
    <br>
    <p>Send us a message and we will be in contact to discuss the best <br>course of action according to your personal needs.</p>
</div>

<div class="flex">

    <div class="grow py-36 pl-20 pr-28">
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-estpurple">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-estpurple">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-estpurple">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div class="absolute pt-5">
            <button class="bg-estpurple hover:bg-pink-800 text-white py-2 px-8 rounded-xl">
                Send message
            </button>
            </div>
        </form>
    </div>

    <div>
        <img src={terereelika} alt="Reelika" class="w-10/12 pr-6 pt-48">
    </div>
</div>

<br>
<br>
<br>

