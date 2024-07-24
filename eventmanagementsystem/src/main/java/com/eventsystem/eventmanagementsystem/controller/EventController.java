package com.eventsystem.eventmanagementsystem.controller;

import com.eventsystem.eventmanagementsystem.exception.EventNotFoundException;
import com.eventsystem.eventmanagementsystem.model.Attendee;
import com.eventsystem.eventmanagementsystem.model.Event;
import com.eventsystem.eventmanagementsystem.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/add")
    public ResponseEntity<Event> add(@RequestBody Event event) {
        try {
            Event savedEvent = eventService.saveEvent(event);
            return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> eventOptional = eventService.findById(id);
        if (eventOptional.isPresent()) {
            return new ResponseEntity<>(eventOptional.get(), HttpStatus.OK);
        } else {
            throw new EventNotFoundException(id);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        try {
            Event updatedEvent = eventService.updateEvent(id, eventDetails);
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
        } catch (EventNotFoundException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        eventService.findById(id)
                .orElseThrow(() -> new EventNotFoundException(id));
        eventService.deleteById(id);
        return ResponseEntity.ok("Event deleted successfully");
    }


//comment
    @PostMapping("/{id}/register")
    public Event registerAttendee(@PathVariable Long id, @RequestBody Attendee attendee) {
        return eventService.registerAttendee(id, attendee);
    }
}

//comment