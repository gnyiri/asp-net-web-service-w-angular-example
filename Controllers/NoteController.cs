using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNetWebServiceExample.Models;

namespace ASPNetWebServiceExample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly NoteContext _context;

        public NoteController(NoteContext context)
        {
            _context = context;

            if (_context.NoteItems.Count() == 0)
            {
                // Create a new NoteItem if collection is empty,
                // which means you can't delete all NoteItems.
                _context.NoteItems.Add(new NoteItem { Title = "Item1" });
                _context.SaveChanges();
            }
        }
        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NoteItem>>> GetNoteItems()
        {
            return await _context.NoteItems.ToListAsync();
        }
        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NoteItem>> GetNoteItem(long id)
        {
            var noteItem = await _context.NoteItems.FindAsync(id);

            if (noteItem == null)
            {
                return NotFound();
            }

            return noteItem;
        }
        [HttpPost]
        public async Task<ActionResult<NoteItem>> PostNoteItem(NoteItem item)
        {
            _context.NoteItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNoteItem), new { id = item.Id }, item);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNoteItem(long id, NoteItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNoteItem(long id)
        {
            var todoItem = await _context.NoteItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.NoteItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
