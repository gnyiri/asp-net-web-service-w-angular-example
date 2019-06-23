using Microsoft.EntityFrameworkCore;

namespace ASPNetWebServiceExample.Models
{
    // represents a DB session
    public class NoteContext : DbContext
    {
        public NoteContext(DbContextOptions<NoteContext> options)
            : base(options)
        {
        }
        public DbSet<NoteItem> NoteItems { get; set; }
    }
}
