package com.eventsystem.eventmanagementsystem.service;

import com.eventsystem.eventmanagementsystem.exception.EventNotFoundException;
import com.eventsystem.eventmanagementsystem.model.Attendee;
import com.eventsystem.eventmanagementsystem.model.Event;
import com.eventsystem.eventmanagementsystem.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService{

    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }
    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    @Override
    public Event updateEvent(Long id, Event eventDetails) {
        return eventRepository.findById(id)
                .map(event -> {
                    event.setName(eventDetails.getName());
                    event.setDescription(eventDetails.getDescription());
                    event.setDate(eventDetails.getDate());
                    event.setLocation(eventDetails.getLocation());
                    return eventRepository.save(event);
                })
                .orElseThrow(() -> new EventNotFoundException(id));
    }

    @Override
    public String deleteById(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new EventNotFoundException(id);
        }
        eventRepository.deleteById(id);
        return "User with id "+id+"has been deleted successful";
    }

      @Override
    public Event registerAttendee(Long id, Attendee attendee) {
        return eventRepository.findById(id)
                .map(event -> {
                    event.getAttendees().add(attendee); // Assuming attendees is a List<String> in Event
                    return eventRepository.save(event);
                })
                .orElseThrow(() -> new EventNotFoundException(id));
    }

}

//com   