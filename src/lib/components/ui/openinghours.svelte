<script lang="ts">
	import { readable, type Readable } from "svelte/store";
    import { createTable, Render, Subscribe } from '@humanspeak/svelte-headless-table';

    const tijd = "9:00  tot  16:30 uur"

    const data = readable([
        {day: "Maandag", time: tijd},
        {day: "Dinsdag", time: tijd},
        {day: "Woensdag", time: tijd},
        {day: "Donderdag", time: tijd},
        {day: "Vrijdag", time: tijd},
        {day: "Zaterdag", time: "Gesloten"},
        {day: "Zondag", time: "Gesloten"}
    ])

    const table = createTable(data)
    
    const columns = table.createColumns([
        table.column({
            header: '',
            accessor: 'day'
        }),
        table.column({
            header: '',
            accessor: 'time'
        })
    ])

    const {
        headerRows,
        rows,
        tableAttrs,
        tableBodyAttrs,
    } = table.createViewModel(columns);


</script>

<div >
    <div class="m-5">
        <h4 class="text-xl font-semibold pb-5 text-balance">Openingstijden</h4>
        <table {...$tableAttrs}>
            <thead class="table-thead-attrs ">
                {#each $headerRows as headerRow (headerRow.id)}
                <tr>
                    {#each headerRow.cells as cell (cell.id)}
                    <Subscribe attrs={cell.attrs()} let:attrs>
                        <th class="font-[--font-body] text-sm font-display border-(--color-text py-4 px-10 text-left text-balance wrap-none" {...attrs}>
                        <Render of={cell.render()} />
                        </th>
                    </Subscribe>
                    {/each}
                </tr>
                {/each}
            </thead>
            <tbody class="table-body-attrs" {...$tableBodyAttrs}>
                {#each $rows as row (row.id)}
                <tr class="text-sm font-[--font-body]">
                    {#each row.cells as cell (cell.id)}
                    <Subscribe attrs={cell.attrs()} let:attrs>
                        <td class="text-sm font-[--font-body] border px-10 wrap-none" {...attrs}>
                        <Render of={cell.render()} />
                        </td>
                    </Subscribe>
                    {/each}
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
