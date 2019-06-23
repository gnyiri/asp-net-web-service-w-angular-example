using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetWebServiceExample.Models
{
    public class NoteItem
    {
        public long Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
    }
}
