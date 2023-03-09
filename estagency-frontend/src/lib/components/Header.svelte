<script lang="ts">
    import logo from '$lib/images/logo.png';
    
    const navs: [string, string][] = [
            	["/", "Home"], 
                ["/about", "About Us"],
                ["/partners", "Our Partners"],
                ["/contact", "Work with us"]
            ];

</script>

<nav class="flex bg-white py-8">
    <img src={logo} class="pl-20 pt-5 object-contain" alt="Estagency logo">
    <ul class="flex justify-end ml-auto">
        {#each navs as nav}
        <li class="pr-12 pt-5">
            <a href={nav[0]}>{nav[1]}</a>
        </li>
        {/each}
    </ul>
</nav>

