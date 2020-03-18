window.addEventListener('DOMContentLoaded', function(e) {
    //Dropdown toggle
    document.querySelectorAll('.dropdown .dropdown-toggle[data-target]').forEach(e => {
        var target = e.getAttribute('data-target');
        e.addEventListener('click', f => {
            f.stopPropagation();
            document.getElementById(target).classList.toggle('show');
        });
    });

    document.querySelectorAll('.dropdown .sub-dropdown-toggle[data-target]').forEach(e => {
        var target = e.getAttribute('data-target');
        e.addEventListener('click', f => {
            f.stopPropagation();
            document.getElementById(target).classList.toggle('show');
            e.parentElement.querySelectorAll(".sub-dropdown-toggle").forEach(dc => {
                if (target != dc.getAttribute("data-target")) {
                    dc.classList.remove("active")
                    dc.querySelectorAll(".dropdown-content").forEach(el => {
                        el.classList.remove("show")
                        el.classList.remove("active")
                    })
                }
            })
        });
    });
    //Add click event to all element <input>, <textarea>, and <a> if they're clicked
    document.body.querySelectorAll('input, textarea, a').forEach(e => {
        e.addEventListener('click', f => {
            f.stopPropagation();
            f.target.classList.add('dirty');
        });
        e.addEventListener('change', f => {
            f.stopPropagation();
            if (f.target.value) 
                e.classList.add('valued');
            else
                e.classList.remove('valued');
        })
    });
    //Active Dropdown Toggler
    document.querySelectorAll('.dropdown-toggle, .sub-dropdown-toggle').forEach(e => {
        e.addEventListener('click', f => {
            f.stopPropagation();
            if (document.getElementById(e.getAttribute('data-target')).classList.contains('show'))
            {
                e.classList.add('active')
            }
            else
            {
                e.classList.remove('active')
            }
        })
    })
    window.addEventListener('click', e => {
        {
            e.stopPropagation();
            var dropdowns = document.querySelectorAll('.dropdown')
            var target = e.target;
            var dropdownTarget = target.getAttribute('data-target');
            if (!dropdownTarget && !target.matches('.dropdown-items')) {
                dropdowns.forEach(el => {
                    el.querySelectorAll('.dropdown-content').forEach(dc => {
                        dc.classList.remove('show')
                    })
                    el.querySelectorAll('.dropdown-toggle').forEach(dt => {
                        dt.classList.remove('active')
                    })
                })
            }
        }
    });
});