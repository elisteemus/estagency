<script>
    import terereelika from '$lib/images/terereelika.png';
</script>


<br>
<br>
<br>

<div class="absolute left-20">
    <h1 class="text-4xl font-semibold tracking-normal leading-snug">Let's find a solution <div class="inline text-estpurple">together.</div></h1>
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
        <img src={terereelika} alt="Reelika" class="w-10/12 pr-6 pt-36">
    </div>
</div>

<br>
<br>
<br>